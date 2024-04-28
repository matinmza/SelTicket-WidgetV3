import { FC } from "react";
import DashboardTitle from "../dashboard-title";
import { STRING_DASHBOARD } from "../string.constants";
import IconDashboardPlan from "@/components/icons/IconDashboardPlan";
import DashboardNewPlan from "../dashboard-new-plan";

const DashboardPlanSection: FC = () => {
    return (
        <div className="t-px-5 ">
            <DashboardTitle
                Icon={IconDashboardPlan}
                title={STRING_DASHBOARD.YOUR_PLAN}
            />
            <div className="t-mt-3"></div>
            <DashboardNewPlan />
            <hr className="t-my-6" />
        </div>
    );
};

export default DashboardPlanSection;
