import { IMG_CONSTANTS } from "@/constants/img.constants";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FC } from "react";
import { SyncLoader } from "react-spinners";

const RobotTypingLoader: FC<{ isLoading: boolean }> = ({ isLoading }) => {
    if (!isLoading) return <div></div>;
    return (
        <div className="t-flex t-gap-1">
            <Avatar className="t-w-6 t-h-6  t-shrink-0">
                <AvatarImage
                    className="t-w-6 t-h-6"
                    src={IMG_CONSTANTS.ROBOT_AVATAR}
                    alt={"12"}
                />
                <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <SyncLoader size={6} color="var(--green-primary)" />
        </div>
    );
};

export default RobotTypingLoader;
