import { SectionFlowE } from "@/types/controller-types/steps.types";
import { QuestionI } from "@/types/steps-types/steps-types";
import { FC, ReactElement, useMemo } from "react";
import { STRING_STEPS } from "../string.constant";
import IconPersonalInformation from "@/components/icons/IconPersonalInformation";
import IconPlanInformation from "@/components/icons/IconPlanInformation";
import IconTimeInformation from "@/components/icons/IconTimeInformation";
import IconAssistantInformation from "@/components/icons/IconAssistantInformation";

const FlowFinalCard: FC<{ list: QuestionI[]; keyName: SectionFlowE }> = ({
    keyName,
    list,
}) => {
    const headerValue = useMemo<{ title: string; icon: ReactElement }>(() => {
        switch (keyName) {
            case SectionFlowE.PersonalInformation:
                return {
                    title: STRING_STEPS.PERSONAL_INFORMATION,
                    icon: <IconPersonalInformation />,
                };
            case SectionFlowE.PlanInformation:
                return {
                    title: STRING_STEPS.PLAN_INFORMATION,
                    icon: <IconPlanInformation />,
                };

            case SectionFlowE.TimeInformation:
                return {
                    title: STRING_STEPS.TIME_INFORMATION,
                    icon: <IconTimeInformation />,
                };

            case SectionFlowE.AssistantInformation:
                return {
                    title: STRING_STEPS.ASSISTANT_INFORMATION,
                    icon: <IconAssistantInformation />,
                };

            default:
                return {
                    title: "",
                    icon: <div />,
                };
        }
    }, [keyName]);
    const isTimeCard = keyName === SectionFlowE.TimeInformation;
    if (!list.length) return <></>;
    return (
        <div className="t-mb-9 ">
            <div className="t-flex t-items-center t-gap-2 t-mb-2 t-font-14-regular">
                {headerValue.icon}
                {headerValue.title}
            </div>

            <div
                className={`t-flex t-flex-col t-gap-4  t-rounded-md  ${
                    !isTimeCard && "t-bg-gray-12 t-px-6 t-py-7  border"
                }`}
            >
                {list.map((item) => (
                    <div
                        key={item.id}
                        className={`t-flex t-justify-between t-items-center t-font-12-regular ${
                            isTimeCard &&
                            "t-border-dashed t-border t-border-gray-6 t-px-6 t-py-2 t-rounded-md"
                        }`}
                    >
                        <div>{item.title}</div>
                        <div
                            className={`${
                                isTimeCard
                                    ? "t-font-12-lite t-text-black-1"
                                    : "t-text-blue-4"
                            }`}
                        >
                            {item.userValue}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlowFinalCard;
