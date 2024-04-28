import IconArrowLeft from "@/components/icons/IconArrowLeft";
import { SettingLinkI } from "@/types/dashboard-types/dashboard-types";
import { FC } from "react";
import { Link } from "react-router-dom";

const DashboardSettingsCard: FC<SettingLinkI> = (props) => {
    if (props.onClick) {
        return (
            <button
                onClick={() => props.onClick!()}
                className="t-flex t-justify-between t-items-center"
            >
                <div className="t-font-12-regular t-text-gray-5">
                    {props.title}
                </div>
                <IconArrowLeft />
            </button>
        );
    }
    return (
        <Link
            to={props.link!}
            className="t-flex t-justify-between t-items-center"
        >
            <div className="t-font-12-regular t-text-gray-5">{props.title}</div>
            <IconArrowLeft />
        </Link>
    );
};

export default DashboardSettingsCard;
