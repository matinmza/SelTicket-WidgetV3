import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IMG_CONSTANTS } from "@/constants/img.constants";
import { selectActiveMovie } from "@/features/movie/movie.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";

import { User } from "lucide-react";
import React from "react";

const MovieHeaderSection = () => {
    const movie = useAppSelector(selectActiveMovie);

    if (!movie) return;
    return (
        <div className="t-relative t-bg-primary dark:t-bg-primary-foreground  t-text-white t-px-10 t-py-10 t-h-96 md:t-h-auto">
            <div className="t-flex t-gap-8">
                <img
                    src={movie.image_url}
                    className="t-z-10 t-object-cover t-max-h-64 t-w-32 md:t-w-48 t-rounded-lg  -t-mb-20"
                    alt={movie.title}
                />

                <div className=" t-z-10  t-flex t-flex-col t-gap-5 t-my-3">
                    <h1 className="t-font-24-medium dark:t-text-white t-text-primary-foreground">
                        {movie.title}
                    </h1>{" "}
                    <div>
                        <div className="t-flex t-flex-wrap t-relative t-h-10 t-gap-x-2 t-gap-y-2">
                            {movie.genres.map((genre) => (
                                <div
                                    className="t-flex t-gap-2 t-items-center t-px-3"
                                    key={genre.id}
                                >
                                    <h3 className="t-font-14-regular t-text-primary-foreground">
                                        {genre.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="t-flex t-flex-wrap t-relative t-h-10 t-gap-x-8 t-gap-y-2">
                            {movie.actors
                                .filter((i) => i.image_url)
                                .slice(0, 3)
                                .map((actor, index) => (
                                    <div
                                        className="t-flex t-gap-2 t-items-center t-px-3"
                                        key={actor.id}
                                    >
                                        <Avatar
                                            className="t-border t-rounded-lg"
                                            key={actor.id}
                                        >
                                            <AvatarImage
                                                src={actor.image_url}
                                                className="t-object-cover "
                                            />
                                            <AvatarFallback className="t-bg-accent">
                                                <User className="t-text-foreground" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <h3 className="t-font-14-regular t-text-primary-foreground">
                                            {actor.name}
                                        </h3>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <img
                src={movie.banner ? movie.banner : IMG_CONSTANTS.BG_MOVIE}
                className="t-absolute  t-inset-0 t-w-full t-h-full t-z-0"
            />
            <div className="t-absolute t-bg-primary t-opacity-80  t-inset-0 t-w-full t-h-full t-z-0" />
        </div>
    );
};

export default MovieHeaderSection;
