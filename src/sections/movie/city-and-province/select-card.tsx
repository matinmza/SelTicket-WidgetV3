import { ChevronLeft } from "lucide-react";
import React, { FC } from "react";

const SelectCard: FC<{ onClick: () => void; title: string }> = ({
    onClick,
    title,
}) => {
    return (
        <div
            onClick={onClick}
            className="w-full t-py-2 hover:t-bg-muted-foreground/10 t-px-2 t-rounded-sm t-transition-all t-flex t-justify-between"
        >
            {title}
            <ChevronLeft className="t-stroke-gray-500" />
        </div>
    );
};

export default SelectCard;
