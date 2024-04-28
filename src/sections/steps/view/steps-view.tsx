import { FC } from "react";
import PlansView from "../plans/view/plans-view";
import GoalView from "../goals/view/goals-view";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectGoalId, selectPlanId } from "@/features/steps/steps.selectors";
import FlowView from "../flow/view";

const StepsView: FC = () => {
    const planId = useAppSelector(selectPlanId);
    const goalId = useAppSelector(selectGoalId);

    return (
        <>
            {!planId && <PlansView />}
            {!goalId && planId && <GoalView />}
            {goalId && planId && <FlowView />}
        </>
    );
};

export default StepsView;
