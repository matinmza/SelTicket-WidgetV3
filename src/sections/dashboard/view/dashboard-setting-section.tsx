import { FC } from "react";
import DashboardTitle from "../dashboard-title";
import IconSetting from "@/components/icons/IconSetting";
import { STRING_GLOBAL } from "@/constants/string.constants";
import DashboardSettingsCard from "../dashboard-settings-card";
import useSettingsItem from "../useSettingsItem";

const DashboardSettingSection: FC = () => {
    const ITEMS = useSettingsItem();
    return (
        <div className="t-px-5">
            <DashboardTitle Icon={IconSetting} title={STRING_GLOBAL.SETTINGS} />
            <div className="t-flex t-gap-6 t-flex-col t-mt-3 ">
                {ITEMS.map((item) => (
                    <DashboardSettingsCard key={item.title} {...item} />
                ))}
            </div>
        </div>
    );
};

export default DashboardSettingSection;
