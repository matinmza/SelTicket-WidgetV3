import { FC } from "react";

const DashboardTitle: FC<{ title: string; Icon: FC }> = ({ Icon, title }) => {
    return (
        <div className="t-flex t-gap-2 t-items-center">
            <Icon />
            <div className="t-font-12-regular">{title}</div>
        </div>
    );
};

export default DashboardTitle;
