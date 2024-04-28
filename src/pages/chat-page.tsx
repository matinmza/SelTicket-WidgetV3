import Loader from "@/components/shared/loader";
import { useGetUserQuery } from "@/controllers/user.controller";
import useDynamicLayout from "@/hooks/useDynamicLayout";
import useLockScroll from "@/hooks/useLockScroll";
import useTrackingItem from "@/sections/chat/hooks/useTrackingItem";
import ChatDynamicView from "@/sections/chat/views/chat-dynamic-view";
import ChatHeaderView from "@/sections/chat/views/chat-header-view";
import ChatLinkView from "@/sections/chat/views/chat-link-view";
import ChatMessagesView from "@/sections/chat/views/chat-messages-view";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        showHeader: false,
    });
    useLockScroll();
    const { data: user, isLoading } = useGetUserQuery(null);

    // when user not have contribute need go to steps and after that back to chat
    const userIsNewAndNeedFillSteps = user && !user.data.contributeId;
    useEffect(() => {
        if (userIsNewAndNeedFillSteps) return navigate("/steps");
    }, [userIsNewAndNeedFillSteps]);

    const isInitTrackingHob = useTrackingItem(
        userIsNewAndNeedFillSteps === false
    );

    if (!isInitTrackingHob || isLoading) return <Loader />;
    return (
        <div className="t-flex t-h-screen  t-flex-col t-px-5">
            <ChatHeaderView />
            <ChatDynamicView />
            <ChatMessagesView />
            <ChatLinkView />
        </div>
    );
};

export default ChatPage;
