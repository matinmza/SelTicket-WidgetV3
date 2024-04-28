import { FC } from "react";
import { Radio } from "@/components/ui/radio";
import useQuestion from "../hooks/useQuestion";

const FlowGender: FC = () => {
    const active = " t-bg-green-3";
    const notActive = " t-bg-gray-7";
    const { userValue, onChange } = useQuestion();
    const defaultClassName =
        " t-p-8 t-border t-flex t-flex-col t-gap-6  t-justify-center t-items-center t-rounded-sm";
    return (
        <>
            <div className="t-flex t-gap-4 t-w-full t-justify-between ">
                <div
                    className={
                        defaultClassName +
                        (userValue === "Male" ? active : notActive)
                    }
                    onClick={() => {
                        onChange("Male");
                    }}
                >
                    <img
                        src="/images/gender-male.svg"
                        className={userValue === "Female" ? "t-opacity-35" : ""}
                    />
                    <div>مرد</div>

                    <Radio checked={userValue === "Male"} />
                </div>
                <div
                    className={
                        defaultClassName +
                        (userValue === "Female" ? active : notActive)
                    }
                    onClick={() => {
                        onChange("Female");
                    }}
                >
                    <img
                        src="/images/gender-female.svg"
                        className={userValue === "Male" ? "t-opacity-35" : ""}
                    />
                    <span>زن</span>
                    <Radio checked={userValue === "Female"} />
                </div>
            </div>
        </>
    );
};

export default FlowGender;
