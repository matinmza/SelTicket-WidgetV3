import { FC, useEffect, useRef } from "react";
import useGetChat from "./hooks/useGetChat";
import ChatCardMessage from "./chat-card-message";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectIsLoadingPostChat } from "@/features/chat/chat.selectors";
import RobotTypingLoader from "./robot-typing-loader";
import ChatDynamicAnswerButtons from "./chat-dynamic-answer-buttons";

const ChatMessagesList: FC = () => {
    const { messages, getMessages } = useGetChat();
    useEffect(() => {
        getMessages();
    }, []);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const isLoadingPostChat = useAppSelector(selectIsLoadingPostChat);

    return (
        <div className="t-p-2 t-pb-16 t-flex t-flex-col t-gap-8 t-relative">
            {messages.map((message) => {
                return <ChatCardMessage key={message.id} {...message} />;
            })}
            <ChatDynamicAnswerButtons />
            <RobotTypingLoader isLoading={isLoadingPostChat} />
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatMessagesList;
