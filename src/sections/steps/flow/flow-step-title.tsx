import FlowAlert from "./flow-alert";
import useQuestion from "./hooks/useQuestion";

export const FlowStepTitle = () => {
    const { question } = useQuestion();
    if (!question) return;
    return (
        <div className="t-mt-24 t-mb-12 t-px-5">
            <FlowAlert />
            <div className="t-font-14-medium t-text-center">
                {question?.title}
            </div>
        </div>
    );
};
