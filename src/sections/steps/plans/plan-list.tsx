import PrimaryCard from "@/components/cards/PrimaryCard";
import SkeletonCard from "@/components/cards/SkeletonCard";
import TabBar from "@/components/shared/tab-bar";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { useGetPlansQuery } from "@/controllers/steps.controller";

import { stepsActions } from "@/features/steps/steps.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";

import { useEffect, useState } from "react";

const PlansList = () => {
    const dispatch = useAppDispatch();

    const [selectValue, setSelectValue] = useState("");
    const { data, isLoading } = useGetPlansQuery(null);

    useEffect(() => {
        if (!data) return;
        const values = data?.data.result;
        if (values.length === 1) {
            handleSubmitPlan(values[0].id);
        }
    }, [data]);

    const handleSubmitPlan = (planId: string) => {
        dispatch(stepsActions.setPlanId(planId));
    };

    return (
        <div>
            <h2 className="t-font-14-medium t-mb-12 t-text-center">
                {data?.data?.additionalData}
            </h2>
            {isLoading && <SkeletonCard length={3} />}
            <div className="t-flex t-flex-col t-gap-3">
                {data?.data.result.map((plan) => (
                    <PrimaryCard
                        key={plan.id}
                        title={plan.title}
                        description={plan.description}
                        image={plan.fileUrl}
                        checked={selectValue === plan.id}
                        onClick={() => {
                            setSelectValue(plan.id);
                        }}
                    />
                ))}
            </div>
            <TabBar>
                <Button
                    onClick={() => {
                        handleSubmitPlan(selectValue);
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

export default PlansList;
