import TabBar from "@/components/shared/tab-bar";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import {
    selectFlowQuestions,
    selectFlowStep,
} from "@/features/steps/steps.selectors";
import { stepsActions } from "@/features/steps/steps.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";
import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC, useEffect } from "react";

const FlowActions: FC = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector(selectFlowQuestions);
    const step = useAppSelector(selectFlowStep);
    const activeQuestion = questions[step];

    // const { userValue } = questions[step];

    const { setOnBack } = useDynamicLayout({
        onBack: () => {},
    });

    useEffect(() => {
        if (!step) {
            setOnBack(() => {
                dispatch(stepsActions.setGoalId(""));
            });
        } else {
            setOnBack(() => {
                dispatch(stepsActions.setBackStep());
            });
        }
    }, [step]);

    if (!activeQuestion) return null;
    return (
        <div>
            <TabBar>
                <Button
                    onClick={() => {
                        dispatch(stepsActions.setNextStep());
                    }}
                    disabled={!activeQuestion || !activeQuestion.userValue}
                >
                    {STRING_GLOBAL.SUBMIT_AND_CONTINUE}
                </Button>
            </TabBar>
        </div>
    );
};

export default FlowActions;
