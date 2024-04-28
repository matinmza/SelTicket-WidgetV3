import {
    useGetLinkQuery,
    useLazyGetMessageQuery,
} from "@/controllers/chat.controller";
import { useGetUserQuery } from "@/controllers/user.controller";
import {
    selectIsStreaming,
    selectMessages,
    selectPreviousDay,
} from "@/features/chat/chat.selectors";
import { chatActions } from "@/features/chat/chat.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";
import useStream from "@/hooks/useStream";
import { STRING_CHAT } from "../string-constants";
import { useNavigate } from "react-router-dom";

const useGetChat = () => {
    const { data: userData, isLoading: isLoadingUser } = useGetUserQuery(null);
    const { data: linkData, isLoading: isLoadingLink } = useGetLinkQuery(null);
    const [
        callMessages,
        { isLoading: isLoadingMessages, isFetching: isFetchingMessages },
    ] = useLazyGetMessageQuery();

    const previousDay = useAppSelector(selectPreviousDay);
    const messages = useAppSelector(selectMessages);
    const isStreaming = useAppSelector(selectIsStreaming);

    const { postChat } = useStream(
        () => {},
        () => {}
    );
    const groupId = userData?.data?.groupId;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const initEmptyUserMessageForInitialRobot = () => {
        postChat("", groupId || "");
    };
    const getMessages = async (day?: "next" | "back") => {
        if (!groupId) return;
        const nextDay = !day
            ? 0
            : day === "back"
            ? previousDay - 1
            : previousDay + 1;
        const res = await callMessages({
            groupId,
            previosDay: nextDay,
        });
        if ("data" in res && res.isSuccess) {
            dispatch(chatActions.initMessages(res.data.data.result));
            // first time when user go to our chat we must send a empty message to our backend for initial chatbot
            if (res.data.data.result.length === 0 && nextDay === 0) {
                initEmptyUserMessageForInitialRobot();
            }
        } else {
            const userNeedBuyPackage =
                res.error &&
                "data" in res.error &&
                res.error?.data?.message ===
                    STRING_CHAT.ERROR_MESSAGE_NOT_HAVE_PACKAGE;
            if (userNeedBuyPackage) userNotHavePackage();
            dispatch(chatActions.initMessages([]));
        }
        dispatch(chatActions.setPreviousDay(nextDay));
    };
    const userNotHavePackage = () => {
        navigate("/packages");
    };

    const isLoading = isLoadingUser || isLoadingLink || isLoadingMessages;

    return {
        messages,
        linkData,
        userData,
        getMessages,
        isLoading,
        groupId,
        isLoadingUser,
        isLoadingLink,
        isLoadingMessages: isFetchingMessages,
        isStreaming,
        canSendMessage: previousDay === 0,
    };
};

export default useGetChat;
