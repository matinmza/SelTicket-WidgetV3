import {
    selectFlowQuestions,
    selectFlowStep,
} from "@/features/steps/steps.selectors";
import { stepsActions } from "@/features/steps/steps.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";

const useQuestion = () => {
    const step = useAppSelector(selectFlowStep);
    const questions = useAppSelector(selectFlowQuestions);
    const question = questions[step];
    const userValue = question?.userValue;
    const dispatch = useAppDispatch();
    const onChange = (value: string, isNumber?: boolean) => {
        if (isNumber) {
            value = value.replace(/[^0-9]/g, "");
        }

        dispatch(stepsActions.setAnswer(value));
    };
    return {
        userValue,
        onChange,
        question,
        questions,
        activeStep: step,
    };
};

export default useQuestion;
