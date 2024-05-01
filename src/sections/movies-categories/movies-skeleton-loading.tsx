import { Skeleton } from "@/components/ui/skeleton";

const MoviesSkeletonLoading = () => {
    return (
        <div className=" t-flex t-flex-col t-gap-10">
            {[1, 2, 3].map((item) => (
                <div
                    className="t-flex t-items-center t-gap-3"
                    style={{ direction: "rtl" }}
                    key={item}
                >
                    <Skeleton className="t-h-10 t-w-10  t-rounded-full" />
                    <div className="t-space-y-2  t-w-full">
                        <Skeleton className="t-h-4 t-w-[200px] t-rounded-sm" />
                        <Skeleton className="t-h-4 t-w-full t-rounded-sm" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoviesSkeletonLoading;
