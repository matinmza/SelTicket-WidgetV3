import { IMG_CONSTANTS } from "@/constants/img.constants";
import { PackageI } from "@/types/controller-types/package.types";
import { toMoney } from "@/utils/shared/number-methods";
import classNames from "classnames";
import { FC, useMemo } from "react";

const PackageCard: FC<{
    item: PackageI;
    active: boolean;
    onClick: () => void;
}> = ({ item, active, onClick }) => {
    const money = useMemo(() => toMoney(item.amount / 10), [item.amount]);
    return (
        <div
            onClick={onClick}
            className={classNames(
                "t-bg-gradient-to-r t-w-full  t-flex t-justify-between t-rounded-lg t-cursor-pointer t-relative t-overflow-hidden",
                active
                    ? "t-to-[#FAC73A] t-from-[#F9DE35] t-shadow-xl"
                    : "t-to-[#1F695A] t-from-[#3B8262]"
            )}
        >
            <div className="t-py-4 t-px-4 t-flex t-flex-col t-gap-2 t-text-white-1">
                <div className="t-font-14-medium">{item.title}</div>
                <div
                    className={classNames(
                        active ? "t-text-white-1" : "t-text-gray-9",
                        " t-font-8-regular"
                    )}
                >
                    {item.description}
                </div>
                <div
                    className={classNames(
                        "t-font-12-regular",
                        active ? "t-text-black-main" : "t-text-white-1"
                    )}
                >
                    {money}
                </div>
            </div>
            <div className="t-pl-10 t-py-2 t-flex-shrink-0">
                <img
                    alt="img"
                    src={item.fileUrl}
                    className="t-w-24 t-h-24 t-rounded-full t-object-cover"
                />
            </div>
            {item.discountPercent && (
                <div className="t-absolute t-left-0 t-top-0 t-w-8   t-h-14 t-items-center t-justify-center t-flex">
                    <img
                        className="t-absolute t-top-0"
                        src={IMG_CONSTANTS.OFFER_BG}
                        alt="12"
                    />
                    <div className="t-z-30 t-absolute t-text-white-1 t-font-14-lite">
                        {item.discountPercent}%
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageCard;
