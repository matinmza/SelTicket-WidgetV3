import { chatActions } from "@/features/chat/chat.slice";
import { selectConnection } from "@/features/signal/signal.selectors";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";
import useSignalR from "@/hooks/useSignal";
import {
    DynamicAnswerButtonsI,
    TrackingItemI,
} from "@/types/controller-types/chat.types";
import { useEffect } from "react";

const useTrackingItem = (ready: boolean) => {
    const connection = useAppSelector(selectConnection);
    const { buildConnection, stopConnection } = useSignalR();

    const dispatch = useAppDispatch();
    useEffect(() => {
        return () => {
            if (!connection) return;
            dispatch(chatActions.setDynamicData([]));
            stopConnection();
        };
    }, [connection]);

    useEffect(() => {
        if (!ready) return;

        buildConnection();
        // some time we show to user button and user must select there option and send for us but dynamic buttons go from here
        connection?.on("GetChildsFlow", (detail: DynamicAnswerButtonsI) => {
            // console.log(detail);
            dispatch(chatActions.setDynamicAnswerButton(detail));
        });

        connection?.on(
            "UpdateTrackingItems",
            (trackingList: TrackingItemI[]) => {
                dispatch(chatActions.setDynamicData(trackingList));
            }
        );
    }, [connection, ready]);

    return connection ? true : false;
};

export default useTrackingItem;
