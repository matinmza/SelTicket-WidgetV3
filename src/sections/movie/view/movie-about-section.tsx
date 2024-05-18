import { STRING_GLOBAL } from "@/constants/string.constants";
import { selectActiveMovie } from "@/features/movie/movie.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import React from "react";

const MovieAboutSection = () => {
    const movie = useAppSelector(selectActiveMovie);

    if (!movie) return;
    return (
        <div className="t-py-16 t-px-4">
            <h2 className="t-font-24-medium t-text-muted-foreground">
                {STRING_GLOBAL.ABOUT} {movie.title}
            </h2>
            <p className="t-font-14-regular t-py-4 dark:t-text-red-500">
                {movie.about_show}
            </p>
        </div>
    );
};

export default MovieAboutSection;
