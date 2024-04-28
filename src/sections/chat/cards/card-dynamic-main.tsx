import { Progress } from "@/components/ui/progress";
import { IMG_CONSTANTS } from "@/constants/img.constants";

import { FC } from "react";
interface PropI {
    total?: number;
    current?: number;
    title?: string;
}
const CardDynamicMain: FC<PropI> = ({ current, total, title }) => {
    const data = total || current || title;
    if (!data) return null;
    const percent = (current! * 100) / total!;
    return (
        <div className="t-relative  t-w-full t-h-16 t-px-4 t-pt-6 t-pb-4 t-text-white-1 t-font-12-medium ">
            <img
                src={IMG_CONSTANTS.DYNAMIC_CARD_BG}
                className="t-absolute  t-inset-0 t-left-0 t-right-0 t-w-full t-h-full t-object-cover t-rounded-md"
            />
            <div className="t-flex t-justify-between t-items-center t-z-10">
                <div className="t-z-10">
                    {title} : {current}
                </div>
                <div className="t-z-10">{total}</div>
            </div>
            <div className=" t-mt-2 t-z-10">
                <Progress value={percent} className="t-w-full " />
            </div>
        </div>
    );
};

export default CardDynamicMain;
