import { toast } from "@/components/ui/use-toast";
import { usePostFeatureMutation } from "@/controllers/features.controller";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    title: z.string().min(1, "نام فیچر اجباری است"),
    description: z.string().min(1, "توضیحات اجباری است"),
});
const useFormPostFeatures = () => {
    const [call, { isLoading }] = usePostFeatureMutation();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const res = await call(values);
        if ("data" in res) {
            toast({
                title: "موفقیت",
                description: "درخواست شما با موفقیت ثبت شد",
            });
        }
        form.reset();
    };
    return { form, onSubmit, isLoading };
};

export default useFormPostFeatures;
