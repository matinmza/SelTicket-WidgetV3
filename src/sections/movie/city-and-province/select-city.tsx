import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { STRING_GLOBAL } from "@/constants/string.constants";
import {
    useLazyCitiesQuery,
    useProvincesQuery,
} from "@/controllers/general.controller";

import { useEffect, useMemo, useState } from "react";
import SelectCard from "./select-card";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { movieActions } from "@/features/movie/movie.slice";
import { toDrawerListItems } from "@/utils/list-convertor";
import { DrawerListItem } from "@/types/objects";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectCity, selectProvince } from "@/features/movie/movie.selectors";

const SelectCity = () => {
    const [call, resCities] = useLazyCitiesQuery();
    const dispatch = useAppDispatch();
    const city = useAppSelector(selectCity);
    const province = useAppSelector(selectProvince);

    const [open, setOpen] = useState(false);

    const cities = useMemo(() => {
        const { data: cData } = resCities?.data || {};
        return cData ? toDrawerListItems(cData) : [];
    }, [resCities]);

    const handleSetValue = (value: DrawerListItem) => {
        dispatch(movieActions.setCity(value));
        setOpen(false);
    };
    useEffect(() => {
        if (!province) return;
        call(province?.id);
    }, [province]);

    if (resCities.isError) return <></>;
    return (
        <>
            <Button variant="outline" onClick={() => setOpen(true)}>
                {STRING_GLOBAL.SELECT_CITY}
                {city?.value ? " : " + city.value : ""}
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
                            {STRING_GLOBAL.SELECT_CITY}
                        </h2>
                        <div className="t-flex t-flex-col t-font-12-regular t-max-h-96 t-overflow-scroll ">
                            {cities.map((item) => (
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

export default SelectCity;
