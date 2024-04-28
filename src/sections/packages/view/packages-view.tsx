import { FC, useState } from "react";
import PackageList from "../package-list";
import BankView from "@/sections/bank/bank-view";
import { PackageI } from "@/types/controller-types/package.types";

const PackagesView: FC = () => {
    const [activeItem, setActiveItem] = useState<PackageI | null>(null);

    return (
        <>
            <PackageList onSelect={setActiveItem} activeId={activeItem?.id} />
            <BankView
                packageId={activeItem?.id}
                price={activeItem?.amount}
                title={activeItem?.title}
            />
        </>
    );
};

export default PackagesView;
