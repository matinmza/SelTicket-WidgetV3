import PrimaryCard from "@/components/cards/PrimaryCard";

import { FC } from "react";
import useQuestion from "../hooks/useQuestion";

const FlowOptionSet: FC = () => {
    const { question, onChange } = useQuestion();
    return (
        <div className="t-flex t-px-5 t-gap-4 t-flex-col t-pb-14">
            {question?.defaultValues.map((item) => (
                <PrimaryCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.fileUrl}
                    checked={question.userValue === item.title}
                    onClick={() => {
                        onChange(item.title);
                    }}
                />
            ))}
        </div>
    );
};

export default FlowOptionSet;
