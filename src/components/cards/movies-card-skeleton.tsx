import { IMovie } from "@/types/cinema";
import React, { FC, Fragment } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const MoviesCardSkeleton: FC = () => {
    return (
        <div className="t-rounded-lg t-shadow-sm t-overflow-hidden  ">
            <div className="relative">
                <Skeleton className="t-h-[310px] t-object-cover  t-w-full" />
            </div>
            <div className="t-bg-white t-p-4">
                <div className="t-flex t-justify-between t-items-center">
                    <div>
                        <Skeleton className="t-w-28 t-h-4 t-rounded-md"></Skeleton>
                    </div>
                    <div className="t-flex t-relative t-h-10 t-gap-1">
                        {[1, 2, 3].map((actor, index) => (
                            <Skeleton
                                key={actor}
                                className={`t-w-10 t-h-10 t-rounded-full `}
                            ></Skeleton>
                        ))}
                    </div>
                </div>
                <div className="t-flex t-flex-col t-gap-2 t-pt-4">
                    {[1, 2, 3].map((actor) => (
                        <Skeleton
                            key={actor}
                            className="t-w-full t-h-2 t-rounded-md"
                        ></Skeleton>
                    ))}
                </div>
                <div className="t-flex t-flex-col t-gap-2 t-pt-4">
                    <Skeleton className="t-w-20 t-h-2 t-rounded-md"></Skeleton>
                </div>
            </div>
        </div>
    );
};

export default MoviesCardSkeleton;
