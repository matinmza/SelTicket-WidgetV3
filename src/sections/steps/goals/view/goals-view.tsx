import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC } from "react";

import GoalsList from "../goals-list";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { stepsActions } from "@/features/steps/steps.slice";
import GoalsCheckPlanIsExist from "../goals-check-plan-is-exist";

const GoalView: FC = () => {
    const dispatch = useAppDispatch();
    useDynamicLayout({
        revalidate: true,
        onBack: () => dispatch(stepsActions.setPlanId("")),
    });
    return (
        <div className="t-mt-20 t-px-5">
            <GoalsList />
            <GoalsCheckPlanIsExist />
        </div>
    );
};

export default GoalView;
