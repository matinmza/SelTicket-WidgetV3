import { IMG_CONSTANTS } from "@/constants/img.constants";
import { toMoney } from "@/utils/shared/number-methods";
import { FC, useMemo } from "react";

const BankCardProduct: FC<{ title: string; price: number }> = ({
    price,
    title,
}) => {
    const money = useMemo(() => toMoney((price || 0) / 10), [price]);

    return (
        <div className="t-flex t-gap-2">
            <div className="t-w-9 t-h-9 t-rounded-[4px] t-flex t-items-center t-justify-center t-bg-green-1">
                <img src={IMG_CONSTANTS.LOGO_WHITE} />
            </div>
            <div className="t-flex t-flex-col ">
                <div className="t-font-12-regular">{title}</div>
                <div className="t-font-12-regular t-text-gray-1">{money}</div>
            </div>
        </div>
    );
};

export default BankCardProduct;
