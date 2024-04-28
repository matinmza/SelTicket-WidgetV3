import { FC, useMemo } from "react";
import useQuestion from "./hooks/useQuestion";
import { STRING_STEPS } from "../string.constant";
import { BMI } from "@/utils/shared/shared-methods";

const FlowAlert: FC = () => {
    const { question, questions } = useQuestion();

    const val = useMemo(() => {
        if (!question) return null;
        if (!question.function) return null;
        const filterHeight = questions.find(
            (item) => item.inputName === "Height"
        );
        if (!filterHeight) return null;
        if (question.function === "BMI") {
            return (
                <div className="w-full t-py-4 t-px-9 t-rounded-sm t-bg-red-4 t-text-center t-mb-9">
                    <div className="t-font-14-medium">
                        {STRING_STEPS.SUGGEST_BMI}
                    </div>
                    <div className="t-text-red-2 t-font-12-lite">
                        {STRING_STEPS.BMI_DESCRIPTION(
                            BMI(+filterHeight?.userValue)
                        )}
                    </div>
                </div>
            );
        }
    }, [question]);
    return val;
};

export default FlowAlert;
