import Loader from "@/components/shared/loader";
import { useGetPackageQuery } from "@/controllers/package.controller";
import { FC } from "react";
import PackageCard from "./package-card";
import { PackageI } from "@/types/controller-types/package.types";

const PackageList: FC<{
    onSelect: (item: PackageI) => void;
    activeId?: string;
}> = ({ onSelect, activeId }) => {
    const { data, isLoading, isError } = useGetPackageQuery(null);
    if (isLoading) return <Loader />;
    if (isError) return <></>;
    return (
        <div className="t-flex t-flex-col t-gap-6 border-b last:t-border-b-0 t-px-5 t-py-8">
            {data?.data.result.map((pack) => (
                <PackageCard
                    key={pack.id}
                    item={pack}
                    onClick={() => {
                        onSelect(pack);
                    }}
                    active={activeId === pack.id}
                />
            ))}
        </div>
    );
};

export default PackageList;
