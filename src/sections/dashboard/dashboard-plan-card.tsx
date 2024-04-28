import { FC } from "react";
import { STRING_DASHBOARD } from "./string.constants";
import { IMG_CONSTANTS } from "@/constants/img.constants";

const DashboardPlanCard: FC<{ title: string }> = ({ title }) => {
    return (
        <div className="t-px-6 t-mt-2 t-rounded-sm t-text-white-1 t-flex t-justify-between t-bg-gradient-to-l t-from-green t-to-green-3 t-to-90%">
            <div className="t-flex t-flex-col t-gap-2 t-py-5">
                <div className="t-font-12-regular">
                    {STRING_DASHBOARD.YOUR_GOAL}
                </div>
                <div className="t-font-14-bold">{title}</div>
            </div>
            <div className="t-py-3">
                <img
                    className="t-w-full"
                    src={IMG_CONSTANTS.DASHBOARD_GOAL_IMAGE}
                />
            </div>
        </div>
    );
};

export default DashboardPlanCard;
