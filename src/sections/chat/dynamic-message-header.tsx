import { selectDynamicData } from "@/features/chat/chat.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC, useMemo } from "react";

const DynamicMessageHeader: FC = () => {
    const dynamicData = useAppSelector(selectDynamicData);

    const dynamicValues = useMemo(() => {
        return dynamicData.filter(
            (item) => item.goalTrackingItem.template === null
        );
    }, [dynamicData]);

    if (dynamicValues.length < 1) return null;
    return (
        <div className="t-sticky  t-bg-gray-7 t-rounded-t-md t-top-0 t-left-0 t-ring-0 t-min-h-10 t-flex-wrap  t-border t-shadow-greenMd t-z-10 t-flex t-justify-between t-items-center  t-gap-y-2 t-py-3">
            {dynamicValues.map((val) => (
                <div
                    key={val.id}
                    className="t-font-12-regular t-flex t-justify-center t-items-center t-gap-2 t-border-l first:t-border-l-0 t-px-4 t-mx-auto t-text-gray-2"
                >
                    <span>{val.value}</span>

                    <span>{val.goalTrackingItem.title}</span>
                    <img
                        src={val?.goalTrackingItem.fileUrl}
                        className="t-w-4 t-h-4"
                    />
                </div>
            ))}
        </div>
    );
};

export default DynamicMessageHeader;
