import { FC } from "react";

const ProfileCard: FC<{ title: string; value?: string }> = ({
    title,
    value,
}) => {
    return (
        <div className="t-flex t-justify-between t-items-center t-py-4 t-font-12-regular t-text-gray-5 t-border-t t-border-gray-6">
            <div>{title}</div>
            <div>{value}</div>
        </div>
    );
};

export default ProfileCard;
