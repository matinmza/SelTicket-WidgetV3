import classNames from "classnames";

import SliderWeight from "@/components/sliders/SliderWeight";
import { STRING_GLOBAL } from "@/constants/string.constants";
import IconHand from "@/components/icons/IconHand";
import useQuestion from "../hooks/useQuestion";
import { IMG_CONSTANTS } from "@/constants/img.constants";

const UserWeightStep = () => {
    const { onChange, userValue } = useQuestion();

    return (
        <div className="t-container t-mx-auto t-h-full   t-flex t-flex-col t-gap-2 t-mt-4 ">
            <div>
                <div className="t-flex t-flex-col t-gap-1">
                    <div className="t-pb-2 t-flex t-items-center t-justify-center t-gap-2">
                        <div className="t-font-18-medium t-text-green">
                            {userValue || 0}
                        </div>
                        <div className="t-text-text-1 t-font-12-regular ">
                            {STRING_GLOBAL.KILOGRAM}
                        </div>
                    </div>
                    <div className="t-flex  t-flex-col t-items-center t-justify-center ">
                        <img
                            src={IMG_CONSTANTS.SLIDER_WEIGHT}
                            className={classNames([
                                +userValue < 40 && "t-scale-x-75",
                                +userValue < 60 && "t-scale-x-90",
                                +userValue > 80 && "t-scale-x-105",
                                +userValue > 85 && "t-scale-x-110",
                                +userValue > 90 && "t-scale-x-125",
                                "t-transition-all t-duration-1000",
                            ])}
                            alt="person"
                        />
                    </div>

                    <div className="w-full">
                        <SliderWeight
                            active={+userValue || 50}
                            onChange={(i) => {
                                onChange("" + i);
                            }}
                        />
                        <div className="t-flex t-items-center t-justify-center">
                            <IconHand />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserWeightStep;
