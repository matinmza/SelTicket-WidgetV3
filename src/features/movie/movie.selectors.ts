import { RootState } from "../../types/store.types";

export const selectActiveMovie = (state: RootState) => state.movie.activeMovie;
export const selectActiveDateSans = (state: RootState) =>
    state.movie.selectedDateSans;
