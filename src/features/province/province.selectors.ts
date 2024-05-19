import { RootState } from "../../types/store.types";

export const selectCity = (state: RootState) => state.province.city;
export const selectProvince = (state: RootState) => state.province.province;
