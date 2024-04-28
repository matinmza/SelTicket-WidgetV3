import PrimaryCard from "@/components/cards/PrimaryCard";
import SkeletonCard from "@/components/cards/SkeletonCard";
import TabBar from "@/components/shared/tab-bar";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { useGetGoalsQuery } from "@/controllers/steps.controller";
import { selectPlanId } from "@/features/steps/steps.selectors";

import { stepsActions } from "@/features/steps/steps.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";

import { useState } from "react";

const GoalsList = () => {
    const dispatch = useAppDispatch();
    const planId = useAppSelector(selectPlanId);
    const [selectValue, setSelectValue] = useState("");
    const { data, isLoading } = useGetGoalsQuery(planId);

    return (
        <div>
            {isLoading && <SkeletonCard length={3} />}
            <h2 className="t-font-14-medium t-mb-12 t-text-center">
                {data?.data.additionalData}
            </h2>
            <div className="t-flex t-flex-col t-gap-3">
                {data?.data.result.map((plan) => (
                    <PrimaryCard
                        key={plan.id}
                        title={plan.title}
                        description={plan.description}
                        image={plan.fileUrl}
                        checked={selectValue === plan.id}
                        onClick={() => {
                            // dispatch(
                            //     stepsActions.setGoalPremiumDay(plan.freemiumDays)
                            // );
                            setSelectValue(plan.id);
                        }}
                    />
                ))}
            </div>
            <TabBar>
                <Button
                    onClick={() => {
                        // when change redux value we change step plan to show flow
                        dispatch(stepsActions.setGoalId(selectValue));
                    }}
                    disabled={!selectValue}
                    loading={isLoading}
                >
                    {STRING_GLOBAL.SUBMIT_AND_CONTINUE}
                </Button>
            </TabBar>
        </div>
    );
};

export default GoalsList;
