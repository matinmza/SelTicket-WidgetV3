import { FC, useMemo } from "react";
import CardDynamicMain from "../cards/card-dynamic-main";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectDynamicData } from "@/features/chat/chat.selectors";

const ChatDynamicView: FC = () => {
    const dynamicData = useAppSelector(selectDynamicData);

    const dynamicCardValue = useMemo(() => {
        return dynamicData.find(
            (item) => item.goalTrackingItem.template !== null
        );
    }, [dynamicData]);

    return (
        <div className="t-mb-3 t-transition-all ">
            <CardDynamicMain
                current={dynamicCardValue?.value}
                total={dynamicCardValue?.max}
                title={dynamicCardValue?.goalTrackingItem.title}
            />
        </div>
    );
};

export default ChatDynamicView;
