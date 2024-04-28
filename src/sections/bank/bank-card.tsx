import { BankI } from "@/types/controller-types/bank.types";
import classNames from "classnames";
import { FC } from "react";

const BankCard: FC<BankI & { onClick: () => void; isActive: boolean }> = ({
    id,
    fileUrl,
    onClick,
    isActive,
}) => {
    return (
        <div
            key={id}
            onClick={onClick}
            className={classNames(
                "t-border t-cursor-pointer t-rounded-[4px] t-p-1 t-w-12 t-h-12 t-flex t-justify-center t-items-center",
                isActive && "t-border-[#3497FC]  t-shadow-[#3497FC] "
            )}
        >
            <img src={fileUrl} className="t-h-fit t-w-fit" alt="alt" />
        </div>
    );
};

export default BankCard;
