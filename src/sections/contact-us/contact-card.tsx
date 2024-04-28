import classNames from "classnames";
import { FC } from "react";

const ContactCard: FC<{
    Icon: FC;
    title: string;
    value: string;
    valueInNextLine?: boolean;
}> = ({ Icon, title, value, valueInNextLine }) => {
    return (
        <div
            className={classNames([
                "t-bg-gray-7 t-rounded-sm t-p-4 t-font-12-regular t-text-gray-5 t-flex t-justify-between",
                valueInNextLine ? "t-flex-col t-gap-2" : "t-items-center",
            ])}
        >
            <div className="t-flex t-items-center t-gap-2">
                <Icon />
                <div>{title}</div>
            </div>
            <div>{value}</div>
        </div>
    );
};

export default ContactCard;
