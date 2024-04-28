import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { STRING_FEATURES } from "../../string.constant";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { Textarea } from "@/components/ui/textarea";
import useFormPostFeatures from "./form-post-features.hooks";
import TabBar from "@/components/shared/tab-bar";

const FormPostFeatures = () => {
    const { form, onSubmit, isLoading } = useFormPostFeatures();

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="t-flex t-flex-col t-gap-4 t-my-9"
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                {STRING_FEATURES.FEATURE_NAME}
                            </FormLabel>

                            <FormControl>
                                <Input
                                    placeholder={STRING_FEATURES.FEATURE_NAME}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{STRING_FEATURES.DESCRIPTION}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={STRING_FEATURES.DESCRIPTION}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <TabBar>
                    <Button
                        onClick={() => {
                            form.handleSubmit(onSubmit);
                        }}
                        loading={isLoading}
                    >
                        {STRING_GLOBAL.SUBMIT}
                    </Button>
                </TabBar>
            </form>
        </Form>
    );
};

export default FormPostFeatures;
