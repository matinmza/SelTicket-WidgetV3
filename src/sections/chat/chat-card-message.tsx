import IconCopy from "@/components/icons/IconCopy";
import IconReadMessage from "@/components/icons/IconReadMessage";

import { useGetUserQuery } from "@/controllers/user.controller";
import { selectLogoBot } from "@/features/widget/widget.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";

import { MessageI } from "@/types/controller-types/chat.types";
import { copyToKeyboard } from "@/utils/shared/shared-methods";
import { toClock } from "@/utils/shared/time-methods";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import classNames from "classnames";
import { FC } from "react";

const ChatCardMessage: FC<MessageI> = (props) => {
    const chatBotLogo = useAppSelector(selectLogoBot);

    const { data } = useGetUserQuery(null);
    const user = data?.data;
    const isUser = props.fromId == user?.id;

    return (
        <div className={classNames([isUser && "t-rtl", "t-flex "])}>
            <Avatar className="t-w-6 t-h-6  t-shrink-0">
                <AvatarImage
                    className="t-w-6 t-h-6 t-bg-green t-rounded-full"
                    src={isUser ? user.fileUrl : chatBotLogo}
                    alt={props.message}
                />
                <AvatarFallback>{user?.firstname[0]}</AvatarFallback>
            </Avatar>

            <div
                className={classNames([
                    " t-px-4 t-pt-6  t-mx-4 t-rounded-lg t-font-14-lite t-rtl t-relative t-mt-5",
                    isUser
                        ? "t-bg-blue-5 t-text-white-1"
                        : "t-bg-white-1  t-text-gray-2",
                ])}
            >
                <div
                    className={classNames([
                        "t-absolute  t-top-0 t-w-0 t-h-0  t-border-l-[25px] t-border-r-[20px] t-border-t-[20px] t-border-l-transparent t-border-r-transparent  ",
                        isUser
                            ? "-t-right-3 t-border-t-blue-5 "
                            : "-t-left-3 t-border-t-white-1",
                    ])}
                ></div>

                <div className="t-relative  t-max-w-full before:t-absolute before:t-inset-0 before:t-animate-typewriter">
                    {props.message}
                </div>
                <div
                    className={classNames(
                        "t-flex t-gap-1 t-items-center t-font-8-regular t-mt-1 t-mb-2",
                        isUser ? "t-text-gray-8" : "t-text-blue-2"
                    )}
                >
                    {isUser && <IconReadMessage />}

                    {toClock(props.createdOn)}
                </div>
            </div>
            <div className=" t-mt-5">
                <button onClick={() => copyToKeyboard(props.message)}>
                    <IconCopy />
                </button>
            </div>
        </div>
    );
};

export default ChatCardMessage;
