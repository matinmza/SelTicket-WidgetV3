import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { chatActions } from "@/features/chat/chat.slice";

import { useGetUserQuery } from "@/controllers/user.controller";

import useStream from "@/hooks/useStream";

const formSchema = z.object({
    text: z.string(),
});

const useFormSendMessage = () => {
    const { postChat } = useStream(
        () => {},
        () => {}
    );
    const dispatch = useAppDispatch();
    const user = useGetUserQuery(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!values["text"]) return;

        dispatch(
            chatActions.addMessage({
                createdOn: new Date().toISOString(),
                fileUrl: "",
                fromFullname: "",
                fromId: user?.data?.data?.id || "",
                group: "",
                id: Math.random().toString(),
                message: values["text"],
            })
        );

        postChat(values["text"], user?.data?.data?.groupId || "");

        form.reset();
    };
    const onSubmitWithButton = async (
        values: z.infer<typeof formSchema>,
        currentFlowId?: string,
        selectedFlowId?: string
    ) => {
        postChat(
            values["text"],
            user?.data?.data?.groupId || "",
            currentFlowId,
            selectedFlowId
        );
        dispatch(chatActions.setDynamicAnswerButton());
    };

    return {
        onSubmit,
        onSubmitWithButton,
        form,
        isLoading: false,
    };
};

export default useFormSendMessage;
