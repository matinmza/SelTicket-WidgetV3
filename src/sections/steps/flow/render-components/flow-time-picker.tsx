import { HOUR_CONSTANT, MIN_CONSTANT } from "@/constants/map/time.constant";

import { toTimeFormat } from "@/utils/shared/time-methods";

import Picker from "react-mobile-picker";
import useQuestion from "../hooks/useQuestion";
import useLockScroll from "@/hooks/useLockScroll";
import { useEffect } from "react";

export const FlowTimePicker = () => {
    useLockScroll();
    const { userValue, onChange, question } = useQuestion();
    const [hourValue, minValue] = userValue
        ? userValue.split(":")
        : ["00", "00"];

    useEffect(() => {
        if (!userValue) {
            onChange(toTimeFormat("00", "00"));
        }
    }, [question]);

    return (
        <div className="t-flex t-flex-col t-items-center">
            <img src={question.defaultValues[0].fileUrl} alt="" />
            <div className=""></div>
            <Picker
                value={{ hour: hourValue, minute: minValue }}
                onChange={(val) => {
                    onChange(toTimeFormat(val.hour, val.minute));
                }}
                className="t-w-36"
            >
                <Picker.Column name={"minute"}>
                    {MIN_CONSTANT.map((option: string) => (
                        <Picker.Item key={option} value={option}>
                            {({ selected }) => (
                                <div
                                    className={`${
                                        selected
                                            ? "text-black-1"
                                            : "t-text-gray-1"
                                    }`}
                                >
                                    {option}
                                </div>
                            )}
                        </Picker.Item>
                    ))}
                </Picker.Column>

                <Picker.Column name={"hour"}>
                    {HOUR_CONSTANT.map((option: string) => (
                        <Picker.Item key={option} value={option}>
                            {({ selected }) => (
                                <div
                                    className={`${
                                        selected
                                            ? "text-black-1"
                                            : "t-text-gray-1"
                                    }`}
                                >
                                    {option}
                                </div>
                            )}
                        </Picker.Item>
                    ))}
                </Picker.Column>
            </Picker>
        </div>
    );
};
