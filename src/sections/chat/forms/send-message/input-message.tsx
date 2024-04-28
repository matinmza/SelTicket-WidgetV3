import { FC } from "react";

const InputMessage: FC<{
    onChange: (value: string) => void;
    value: string;
    disabled: boolean;
}> = ({ onChange, value, disabled }) => {
    return (
        <input
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            placeholder="پیام"
            disabled={disabled}
            className="t-h-full t-w-full t-bg-gray-10 t-px-4 t-outline-none t-font-12-regular t-rtl"
        />
    );
};

export default InputMessage;
