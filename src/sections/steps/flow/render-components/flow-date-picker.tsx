import useLockScroll from "@/hooks/useLockScroll";
import useQuestion from "../hooks/useQuestion";
import { FC } from "react";
import DatePicker from "@/components/ui/date-picker/date-picker";

const FlowDatePicker: FC = () => {
    useLockScroll();

    const { userValue, onChange, question } = useQuestion();

    return (
        <div className="t-flex t-justify-center t-px-5">
            <DatePicker
                label=""
                onChange={(val) => {
                    onChange(val);
                }}
                date={userValue}
                description={question.title}
            />
        </div>
    );
};

export default FlowDatePicker;
