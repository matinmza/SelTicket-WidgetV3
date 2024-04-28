import useLoadingRtk from "@/hooks/useLoadingRtk";

import { FC } from "react";
import { SyncLoader } from "react-spinners";

const GetMessagesLoader: FC = () => {
    // todo : must check here we can not access to isLoading api messages so i use this trike but in feature must change
    const isLoading = useLoadingRtk("getMessage");

    if (!isLoading) return null;
    return (
        <div className="t-absolute t-w-full t-h-full t-top-0 t-bottom-0 t-left-0 t-right-0  t-flex t-flex-col t-items-center t-justify-center t-z-10 t-bg-[#a3a3a3]/70 t-gap-10">
            <SyncLoader size={14} color="var(--white-1)" />
        </div>
    );
};

export default GetMessagesLoader;
