import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DrawerListItem } from "@/types/objects";
import { ProvinceStateI } from "./province.types";
import {
    handleGetProvinceStore,
    handleSetProvinceStore,
} from "@/utils/local-storage";

export const initialProvinceState: ProvinceStateI = {
    city: handleGetProvinceStore("city"),
    province: handleGetProvinceStore("province"),
};

export const provinceSlice = createSlice({
    name: "province",
    initialState: initialProvinceState,
    reducers: {
        setProvince: (
            state,
            action: PayloadAction<DrawerListItem | undefined>
        ) => {
            state.city = undefined;
            handleSetProvinceStore("city", undefined);
            // store to localStorage
            handleSetProvinceStore("province", action.payload);
            state.province = action.payload;
        },
        setCity: (state, action: PayloadAction<DrawerListItem | undefined>) => {
            // store to localStorage
            handleSetProvinceStore("city", action.payload);
            state.city = action.payload;
        },
    },
});

export const provinceActions = provinceSlice.actions;
export const provinceReducer = provinceSlice.reducer;
