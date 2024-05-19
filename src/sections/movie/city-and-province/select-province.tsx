import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { useProvincesQuery } from "@/controllers/general.controller";

import { useMemo, useState } from "react";
import SelectCard from "./select-card";
import useAppDispatch from "@/hooks/store/useAppDispatch";

import { toDrawerListItems } from "@/utils/list-convertor";
import { DrawerListItem } from "@/types/objects";
import useAppSelector from "@/hooks/store/useAppSelector";
import { provinceActions } from "@/features/province/province.slice";
import { selectProvince } from "@/features/province/province.selectors";

const SelectProvince = () => {
    const { data, isError } = useProvincesQuery(null);
    const dispatch = useAppDispatch();
    const province = useAppSelector(selectProvince);
    const [open, setOpen] = useState(false);

    const provinces = useMemo(() => {
        const { data: pData } = data || {};
        return pData ? toDrawerListItems(pData) : [];
    }, [data]);

    const handleSetValue = (value: DrawerListItem) => {
        dispatch(provinceActions.setProvince(value));
        setOpen(false);
    };

    if (isError) return <></>;
    return (
        <>
            <Button variant="outline" onClick={() => setOpen(true)}>
                {STRING_GLOBAL.SELECT_PROVINCE}
                {province?.value ? " : " + province.value : ""}
            </Button>
            <Drawer
                open={open}
                onOpenChange={(cur) => {
                    if (cur === false) setOpen(false);
                }}
            >
                <DrawerContent className="t-p-4 ">
                    <div className="">
                        <h2 className="text-primary t-font-14-bold t-py-2 t-px-2">
                            {STRING_GLOBAL.SELECT_PROVINCE}
                        </h2>
                        <div className="t-flex t-flex-col t-font-12-regular t-max-h-96 t-overflow-scroll ">
                            {provinces.map((item) => (
                                <SelectCard
                                    key={item.id}
                                    onClick={() => {
                                        handleSetValue(item);
                                    }}
                                    title={item.value}
                                />
                            ))}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default SelectProvince;
