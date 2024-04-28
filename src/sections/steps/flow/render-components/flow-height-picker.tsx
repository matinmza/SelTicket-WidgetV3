import classNames from "classnames";
import { SliderHeight } from "@/components/sliders/SliderHeight";

import { STRING_GLOBAL } from "@/constants/string.constants";
import useQuestion from "../hooks/useQuestion";
import { IMG_CONSTANTS } from "@/constants/img.constants";

const UserHeightStep = () => {
    const { onChange, userValue } = useQuestion();
    return (
        <div className="t-container t-mx-auto  t-flex t-flex-col t-gap-8 t-pt-16">
            <div>
                <div className="t-flex  t-gap-1">
                    <SliderHeight
                        active={+userValue || 120}
                        onChange={(i) => {
                            onChange("" + i);
                        }}
                    />
                    <div className="t-flex-1 t-flex t-items-center t-justify-center t-relative">
                        <img
                            src={IMG_CONSTANTS.SLIDER_HEIGHT}
                            className={classNames([
                                +userValue < 100 && "t-scale-50",
                                +userValue < 120 && "t-scale-75",
                                +userValue < 130 && "t-scale-90",
                                +userValue < 150 && "t-scale-95",
                                +userValue > 180 && "t-scale-110",
                                +userValue > 200 && "t-scale-125",
                                "t-transition-all t-duration-1000",
                            ])}
                            alt="person"
                        />
                        <div className="t-absolute t-left-0 t-top-10 t-flex t-gap-2 ab">
                            <div className="t-text-text-1 t-font-12-regular ">
                                {STRING_GLOBAL.CENTIMETER}
                            </div>
                            <div className="t-font-18-medium t-text-green">
                                {userValue || 0}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHeightStep;
