import React from "react";
import { STRING_GLOBAL } from "@/constants/string.constants";
import SelectProvince from "../city-and-province/select-province";
import SelectCity from "../city-and-province/select-city";
import MovieSelectDateSans from "../select-date-sans/movie-select-date-sans";

const MovieSansSection = () => {
    return (
        <div className="t-mx-5 t-my-4">
            <h2 className="t-font-16-bold t-mb-4">
                {STRING_GLOBAL.SELECT_SANS_AND_CINEMA}
            </h2>
            <div className="t-flex t-gap-2 t-my-4">
                <SelectProvince />
                <SelectCity />
            </div>
            <MovieSelectDateSans />
        </div>
    );
};

export default MovieSansSection;
