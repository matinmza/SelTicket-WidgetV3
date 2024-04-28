import { FC } from "react";
import useGetChat from "../hooks/useGetChat";

import { Skeleton } from "@/components/ui/skeleton";
import CardLink from "../cards/Card-link";

const ChatLinkView: FC = () => {
    const { linkData, isLoadingLink, isStreaming } = useGetChat();

    return (
        <div className="t-h-16 t-shrink-0 t-bg-white-1 t-flex t-justify-end t-select-none t-items-center t-gap-2">
            {isLoadingLink && (
                <>
                    <Skeleton className="t-w-20 t-h-10 t-rounded-[32px]" />
                    <Skeleton className="t-w-20 t-h-10 t-rounded-[32px]" />
                    <Skeleton className="t-w-20 t-h-10 t-rounded-[32px]" />
                </>
            )}
            <div className="t-w-full t-overflow-auto  t-whitespace-nowrap t-rounded-md t-flex t-gap-2 t-ltr">
                {linkData?.data.result.map((item) => (
                    <CardLink
                        disabled={isStreaming}
                        link={item}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatLinkView;
