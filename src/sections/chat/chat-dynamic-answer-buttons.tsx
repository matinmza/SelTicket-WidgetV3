import {
    selectDynamicAnswerButtonData,
    selectIsLoadingPostChat,
} from "@/features/chat/chat.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC } from "react";
import useFormSendMessage from "./forms/send-message/form-send-message.hook";
import useGetChat from "./hooks/useGetChat";

const ChatDynamicAnswerButtons: FC = () => {
    const { onSubmitWithButton, isLoading } = useFormSendMessage();

    const dynamicAnswerButton = useAppSelector(selectDynamicAnswerButtonData);
    const onSend = (id: string) => {
        onSubmitWithButton(
            {
                text: "",
            },
            dynamicAnswerButton?.currentFlowId,
            id
        );
    };

    const { isStreaming, canSendMessage } = useGetChat();
    const isLoadingPostChat = useAppSelector(selectIsLoadingPostChat);
    const disabled =
        isStreaming || isLoadingPostChat || isLoading || !canSendMessage;

    if (!dynamicAnswerButton || disabled) return null;
    return (
        <div className="t-flex t-flex-col t-gap-2 t-pr-8 t-pl-10">
            {dynamicAnswerButton.childFlow.map((item) => (
                <div
                    key={item.flowId}
                    className="t-border t-rounded-xl t-p-2 t-flex t-items-center t-justify-center t-cursor-pointer t-bg-primary/20 t-text-white-1 t-font-12-medium"
                    onClick={() => onSend(item.flowId)}
                >
                    {item.subjectMessage}
                </div>
            ))}
        </div>
    );
};

export default ChatDynamicAnswerButtons;
