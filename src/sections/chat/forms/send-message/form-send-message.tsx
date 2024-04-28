import IconSendMessage from "@/components/icons/IconSendMessage";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { FC } from "react";
import useFormSendMessage from "./form-send-message.hook";
import InputMessage from "./input-message";
import useGetChat from "../../hooks/useGetChat";
import {
    selectDynamicAnswerButtonData,
    selectIsLoadingPostChat,
} from "@/features/chat/chat.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";

const FormSendMessage: FC = () => {
    const { form, onSubmit, isLoading } = useFormSendMessage();
    const { isStreaming, canSendMessage } = useGetChat();
    const isLoadingPostChat = useAppSelector(selectIsLoadingPostChat);
    // some time answer must send from our button and user not need to write so just must click on our DynamicAnswerButtonData
    const answerButton = useAppSelector(selectDynamicAnswerButtonData);

    const disabled =
        isStreaming ||
        isLoadingPostChat ||
        isLoading ||
        !canSendMessage ||
        Boolean(answerButton?.currentFlowId);
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="t-absolute t-w-full t-rounded-t-md  t-bg-gray-10 t-bottom-0 t-left-0 t-ring-0 t-h-10 t-min-h-12 t-flex t-justify-between t-items-center">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem className="t-h-full t-w-full">
                                <FormControl>
                                    <InputMessage
                                        onChange={(val) => {
                                            form.setValue(
                                                "text",
                                                val.toString()
                                            );
                                        }}
                                        disabled={disabled}
                                        value={field.value}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <button
                        disabled={disabled}
                        type="submit"
                        className="t-p-2 t-pl-0 t-bg-gray-10"
                    >
                        <IconSendMessage />
                    </button>
                </div>
            </form>
        </Form>
    );
};

export default FormSendMessage;
