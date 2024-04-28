import IconArrowDay from "@/components/icons/IconArrowDay";
import { FC } from "react";
import { STRING_CHAT } from "../string-constants";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectPreviousDay } from "@/features/chat/chat.selectors";
import IconLock from "@/components/icons/IconLock";

interface CardHeaderProps {
    type: "next" | "back";
    onClick: () => void;
}

const CardHeaderDay: FC<CardHeaderProps> = ({ type, onClick }) => {
    const previousDay = useAppSelector(selectPreviousDay);
    const isLock = type === "next" && previousDay > -1;
    return (
        <button
            onClick={onClick}
            className="t-flex  t-font-12-regular t-text-green-2 t-items-center "
            disabled={isLock}
        >
            {isLock && <IconLock />}
            <div>{type === "next" && STRING_CHAT.NEXT_DAY_PLAN}</div>
            <IconArrowDay className={type === "next" ? "t-rotate-180" : ""} />
            <div>{type === "back" && STRING_CHAT.LAST_DAY_PLAN}</div>
        </button>
    );
};

export default CardHeaderDay;
