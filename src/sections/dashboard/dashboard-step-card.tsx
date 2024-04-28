import { StepI } from "@/types/controller-types/contribute.types";
import classNames from "classnames";
import { FC } from "react";

const DashboardStepCard: FC<{ step: StepI; isFull: boolean }> = ({
    step,
    isFull,
}) => {
    return (
        <div
            className={classNames(
                "t-px-3 t-py-2 t-flex t-justify-between t-items-center   t-rounded-sm  t-shadow-greenSm",
                isFull ? "t-col-span-4" : "t-col-span-2"
            )}
        >
            <div className="t-font-12-regular">{step.title}</div>
            <div className="t-font-24-medium t-text-green">{step.value}</div>
        </div>
    );
};

export default DashboardStepCard;
