import IconArrowLeft from "@/components/icons/IconArrowLeft";
import { IMG_CONSTANTS } from "@/constants/img.constants";
import { FC } from "react";
import { Link } from "react-router-dom";

const DashboardNewPlan: FC = () => {
    return (
        <Link to="/steps">
            <div className="t-rounded-sm t-overflow-hidden t-relative t-h-48">
                <img
                    src={IMG_CONSTANTS.DASHBOARD_NEW_PAN}
                    alt="new plan"
                    className="t-absolute t-w-full t-object-contain t-left-0 t-right-0 t-top-0 t-bottom-0 "
                />
                <div className="t-absolute t-left-5 t-bottom-6  t-z-20 t-font-14-bold t-text-white-1 t-flex t-gap-2 t-items-center">
                    تعریف هدف جدید
                    <IconArrowLeft color="white" />
                </div>
                <div className="t-absolute t-bottom-0 t-left-0 t-right-0 t-bg-gradient-to-t t-from-green   t-z-10 t-w-full t-h-32"></div>
            </div>
        </Link>
    );
};

export default DashboardNewPlan;
