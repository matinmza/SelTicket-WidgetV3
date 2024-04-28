import { useEffect, useState } from "react";
import useQuestion from "./hooks/useQuestion";
import { DetailIFinalSubmit } from "@/types/steps-types/steps-types";
import { SectionFlowE } from "@/types/controller-types/steps.types";
import FlowFinalCard from "./flow-final-card";
import FlowFinalSubmitModal from "./flow-final-submit-modal";

const initValue = {
    None: [],
    PersonalInformation: [],
    PlanInformation: [],
    TimeInformation: [],
    AssistantInformation: [],
};

const FlowFinalSubmit = () => {
    const { question, questions } = useQuestion();
    const [detail, setDetail] = useState<DetailIFinalSubmit>(initValue);
    const [skip, setSkip] = useState(false);
    useEffect(() => {
        if (question) return;
        if (questions.length === 1) setSkip(true);
        questions.map((item) => {
            //sort question and answer with type
            setDetail((currentValue) => {
                const newValue = { ...currentValue };
                newValue[item.section] = [...newValue[item.section], item];
                return newValue;
            });
        });
        return () => {
            setDetail(initValue);
        };
    }, [question]);

    if (question) return null;
    return (
        <div className="t-px-5 t-py-7">
            <FlowFinalCard
                list={detail.PersonalInformation}
                keyName={SectionFlowE.PersonalInformation}
            />
            <FlowFinalCard
                list={detail.PlanInformation}
                keyName={SectionFlowE.PlanInformation}
            />
            <FlowFinalCard
                list={detail.TimeInformation}
                keyName={SectionFlowE.TimeInformation}
            />
            <FlowFinalCard
                list={detail.AssistantInformation}
                keyName={SectionFlowE.AssistantInformation}
            />

            <FlowFinalSubmitModal skip={skip} />
        </div>
    );
};

export default FlowFinalSubmit;
