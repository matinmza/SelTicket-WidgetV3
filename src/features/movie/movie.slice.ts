import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MovieStateI } from "./movie.types";

import { IMovie } from "@/types/cinema";

export const initialMovieState: MovieStateI = {
    activeMovie: undefined,
    selectedDateSans: "",
};

export const movieSlice = createSlice({
    name: "movie",
    initialState: initialMovieState,
    reducers: {
        setActiveMovie: (state, action: PayloadAction<IMovie | undefined>) => {
            state.activeMovie = action.payload;
        },
        setActiveDateSans: (state, action: PayloadAction<string>) => {
            state.selectedDateSans = action.payload;
        },
    },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
