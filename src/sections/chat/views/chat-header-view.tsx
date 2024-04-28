import useAppSelector from "@/hooks/store/useAppSelector";
import CardHeaderDay from "../cards/card-header-day";
import useGetChat from "../hooks/useGetChat";
import { selectIsLoadingPostChat } from "@/features/chat/chat.selectors";

const ChatHeaderView = () => {
    const { getMessages, isStreaming } = useGetChat();
    const isLoadingPostChat = useAppSelector(selectIsLoadingPostChat);
    const disabled = isStreaming || isLoadingPostChat;
    return (
        <div className="t-flex t-justify-between t-items-center t-my-4">
            <CardHeaderDay
                onClick={() => !disabled && getMessages("back")}
                type="back"
            />
            <CardHeaderDay
                onClick={() => !disabled && getMessages("next")}
                type="next"
            />
        </div>
    );
};

export default ChatHeaderView;
