import { FC } from "react";
import {
    selectFlowQuestions,
    selectFlowStep,
} from "@/features/steps/steps.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import {
    ComponentFlowE,
    TypeFlowE,
} from "@/types/controller-types/steps.types";
import { useMemo } from "react";
import FlowDatePicker from "./render-components/flow-date-picker";
import FlowOptionSet from "./render-components/flow-option-set";

import FlowHeightPicker from "./render-components/flow-height-picker";
import FlowGender from "./render-components/flow-gender";
import FlowWeightPicker from "./render-components/flow-weight-picker";
import FlowInput from "./render-components/flow-input";
import { FlowTimePicker } from "./render-components/flow-time-picker";

const FlowRenderComponent: FC = () => {
    const questions = useAppSelector(selectFlowQuestions);
    const step = useAppSelector(selectFlowStep);
    const activeQuestion = questions[step];

    const renderComponent = useMemo(() => {
        if (!activeQuestion) return;
        switch (activeQuestion.type) {
            case TypeFlowE.OptionSet:
                switch (activeQuestion.component) {
                    case ComponentFlowE.Gender:
                        return <FlowGender />;
                    default:
                        return <FlowOptionSet />;
                }
            case TypeFlowE.Date:
                return <FlowDatePicker />;
            case TypeFlowE.String:
                return <FlowInput />;
            case TypeFlowE.Int:
                switch (activeQuestion.component) {
                    case ComponentFlowE.Height:
                        return <FlowHeightPicker />;
                    case ComponentFlowE.Weight:
                        return <FlowWeightPicker />;
                    default:
                        return <FlowInput isNumber />;
                }
            case TypeFlowE.Time:
                return <FlowTimePicker />;
            default:
                return <></>;
        }
    }, [activeQuestion]);

    return <>{renderComponent}</>;
};

export default FlowRenderComponent;
