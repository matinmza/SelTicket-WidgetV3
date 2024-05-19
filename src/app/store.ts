import { widgetReducer } from "@/features/widget/widget.slice";
import { movieReducer } from "@/features/movie/movie.slice";
import { provinceReducer } from "@/features/province/province.slice";

import { layoutReducer } from "@/features/layout/layout.slice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import api from "./server";

const store = configureStore({
    devTools: true,
    reducer: {
        layout: layoutReducer,
        widget: widgetReducer,
        movie: movieReducer,
        province: provinceReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});
setupListeners(store.dispatch);
export default store;
