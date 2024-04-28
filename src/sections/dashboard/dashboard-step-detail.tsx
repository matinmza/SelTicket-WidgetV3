import { StepI } from "@/types/controller-types/contribute.types";
import { FC, useMemo } from "react";
import DashboardStepCard from "./dashboard-step-card";

const DashboardStepsDetail: FC<{ steps: StepI[] }> = ({ steps }) => {
    const visibleSteps = useMemo(() => {
        const resFilter = steps.filter((step) => step.showInDashboard);
        const component = resFilter.map((item, index) => (
            <DashboardStepCard
                key={item.stepId}
                step={item}
                isFull={
                    resFilter.length === index + 1 && resFilter.length % 2 === 1
                }
            />
        ));
        return component;
    }, [steps]);
    return <div className="t-mt-6 t-mb-8 t-row">{visibleSteps}</div>;
};

export default DashboardStepsDetail;
