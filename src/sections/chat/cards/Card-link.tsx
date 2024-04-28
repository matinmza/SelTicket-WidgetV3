import BlinkLink from "@/components/shared/blink-link";
import { LinkI } from "@/types/controller-types/chat.types";
import { FC } from "react";

const CardLink: FC<{ link: LinkI; disabled: boolean }> = ({
    link,
    disabled,
}) => {
    return (
        <BlinkLink
            to={link.linkUrl}
            key={link.id}
            disabled={disabled}
            className="t-h-10 t-shrink-0 t-rounded-[32px] t-bg-gray-10 t-flex t-items-center t-justify-center t-px-2 t-font-12-regular"
        >
            {link.title}
            <img src={link.fileUrl} className="t-w-6 t-h-6" />
        </BlinkLink>
    );
};

export default CardLink;
