import {
    selectFlowQuestions,
    selectFlowStep,
    selectTotalStep,
} from "@/features/steps/steps.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC } from "react";
import useQuestion from "./hooks/useQuestion";

const FlowProgressbar: FC = () => {
    const questionFlow = useAppSelector(selectFlowQuestions);
    const stepFlow = useAppSelector(selectFlowStep) + 1;
    const totalFlowQuestions = useAppSelector(selectTotalStep);
    const { question } = useQuestion();
    if (!question) return null;
    return (
        <div className="t-flex t-h-1 t-mt-1 t-fixed t-top-14 t-w-full t-ltr">
            {questionFlow.map((_question, index) => (
                <div
                    key={_question.id}
                    className={`t-grow flex t-justify-center t-relative ${
                        stepFlow > index
                            ? "t-bg-green  t-rounded-md t-border-x "
                            : "t-bg-gray-8"
                    }`}
                >
                    {index + 1 === stepFlow && (
                        <div className="t-mt-3 t-absolute">
                            <div className="t-w-7 t-flex t-items-center t-justify-center t-h-7 t-rounded-full t-bg-red-4 t-relative">
                                <div className="t-h-2 t-w-0.5 t-bg-red-4  t-absolute -t-top-2"></div>
                                <p className="t-font-8-regular t-text-gray-5">
                                    {index + 1}/{totalFlowQuestions}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlowProgressbar;
