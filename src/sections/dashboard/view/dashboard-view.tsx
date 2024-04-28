import { FC } from "react";
import DashboardFloatChatButton from "../dashboard-float-chat-button";
import DashboardSettingSection from "./dashboard-setting-section";
import DashboardGoalDetailSection from "./dashboard-goal-section";
import DashboardPlanSection from "./dashboard-plan-section";

const DashboardView: FC = () => {
    return (
        <div className="t-pb-28">
            <DashboardGoalDetailSection />
            <DashboardPlanSection />

            <DashboardSettingSection />
            <DashboardFloatChatButton />
        </div>
    );
};

export default DashboardView;
