import { RootState } from "../../types/store.types";

export const selectActiveMovie = (state: RootState) => state.movie.activeMovie;
export const selectCity = (state: RootState) => state.movie.city;
export const selectProvince = (state: RootState) => state.movie.province;
