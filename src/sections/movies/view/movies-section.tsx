import MoviesCard from "@/components/cards/movies-card";
import MoviesCardSkeleton from "@/components/cards/movies-card-skeleton";
import { useShowCategoryQuery } from "@/controllers/category.controller";
import React from "react";
import { useParams } from "react-router-dom";

const MoviesSection = () => {
    const { id = 0 } = useParams();
    const { data, isLoading } = useShowCategoryQuery(id as number);
    const movieList = data?.data;

    return (
        <div className="t-grid t-grid-cols-12 t-w-full t-gap-8 t-py-8">
            {isLoading &&
                [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                        key={i}
                        className="lg:t-col-span-4 xl:t-col-span-3 md:t-col-span-6 t-col-span-12"
                    >
                        <MoviesCardSkeleton />
                    </div>
                ))}
            {movieList?.map((movie) => (
                <div
                    key={movie.id}
                    className="lg:t-col-span-4 xl:t-col-span-3 md:t-col-span-6 t-col-span-12"
                >
                    <MoviesCard key={movie.id} {...movie} />
                </div>
            ))}
        </div>
    );
};

export default MoviesSection;
