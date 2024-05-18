import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStateI } from "./movie.types";

import { IMovie } from "@/types/cinema";
import { DrawerListItem } from "@/types/objects";

export const initialMovieState: MovieStateI = {
    activeMovie: undefined,
    city: undefined,
    province: undefined,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialMovieState,
    reducers: {
        setActiveMovie: (state, action: PayloadAction<IMovie | undefined>) => {
            state.activeMovie = action.payload;
        },
        setProvince: (
            state,
            action: PayloadAction<DrawerListItem | undefined>
        ) => {
            state.city = undefined;
            state.province = action.payload;
        },
        setCity: (state, action: PayloadAction<DrawerListItem | undefined>) => {
            state.city = action.payload;
        },
    },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
