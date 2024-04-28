import { FC } from "react";
import DynamicMessageHeader from "../dynamic-message-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import FormSendMessage from "../forms/send-message/form-send-message";

import ChatMessagesList from "../chat-messages-list";
import GetMessagesLoader from "../get-messages-loader";

const ChatMessagesView: FC = () => {
    return (
        <ScrollArea className="t-grow t-bg-gray-13 t-rounded-md t-relative">
            <DynamicMessageHeader />
            <ChatMessagesList />
            <GetMessagesLoader />
            <FormSendMessage />
        </ScrollArea>
    );
};

export default ChatMessagesView;
