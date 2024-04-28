import { useGetFlowQuery } from "@/controllers/steps.controller";
import { selectGoalId } from "@/features/steps/steps.selectors";
import { stepsActions } from "@/features/steps/steps.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC, useEffect } from "react";
import FlowProgressbar from "../flow-progressbar";
import FlowRenderComponent from "../flow-render-component";
import { QuestionI } from "@/types/steps-types/steps-types";
import { FlowStepTitle } from "../flow-step-title";
import FlowActions from "../flow-actions";
import FlowFinalSubmit from "../flow-final-submit";
import useQuestion from "../hooks/useQuestion";

const FlowView: FC = () => {
    const goalId = useAppSelector(selectGoalId);

    const { questions, question } = useQuestion();
    const { data, isLoading } = useGetFlowQuery(goalId);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            const addValue: QuestionI[] = data.data?.result.map((item) => ({
                ...item,
                userValue: "",
            }));
            dispatch(stepsActions.setFlowQuestions(addValue));
        }
    }, [data]);

    if (!questions) return null;
    return (
        <>
            <FlowProgressbar />
            <FlowStepTitle />
            <FlowRenderComponent />
            {!question && !isLoading && <FlowFinalSubmit />}
            <FlowActions />
        </>
    );
};

export default FlowView;
