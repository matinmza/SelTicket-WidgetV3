import useLockScroll from "@/hooks/useLockScroll";
import useQuestion from "../hooks/useQuestion";
import { FC } from "react";

const FlowInput: FC<{ isNumber?: boolean }> = ({ isNumber }) => {
    useLockScroll();

    const { userValue, onChange } = useQuestion();

    return (
        <div className="t-flex t-justify-center">
            <input
                value={+userValue === 0 ? "" : userValue}
                onChange={(e) => {
                    onChange(e.target.value, isNumber);
                }}
                inputMode={isNumber ? "numeric" : "text"}
                className="t-ltr t-border-b t-border-b-green t-outline-none t-text-center"
            />
        </div>
    );
};

export default FlowInput;
