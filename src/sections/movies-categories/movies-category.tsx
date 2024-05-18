import { useShowCategoryQuery } from "@/controllers/category.controller";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { Link } from "react-router-dom";
import IconArrowLeft from "@/components/icons/IconArrowLeft";
import MoviesCard from "@/components/cards/movies-card";
import MoviesCardSkeleton from "@/components/cards/movies-card-skeleton";
import Loader from "@/components/shared/loader";

const MoviesCategory: FC<{
    title: string;
    id: number;
}> = ({ title, id }) => {
    const { data, isLoading } = useShowCategoryQuery(id);
    const movieList = data?.data;
    return (
        <div className="t-pt-10 t-flex t-flex-col t-gap-4 t-select-none">
            <h2 className="t-font-24-medium t-text-primary">{title}</h2>
            <div className="t-grid t-grid-cols-12 t-w-full t-gap-8">
                {isLoading &&
                    [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="lg:t-col-span-4 xl:t-col-span-3 md:t-col-span-6 t-col-span-12"
                        >
                            <MoviesCardSkeleton />
                        </div>
                    ))}
                {movieList?.slice(0, 8).map((movie) => (
                    <div
                        key={movie.id}
                        className="lg:t-col-span-4 xl:t-col-span-3 md:t-col-span-6 t-col-span-12"
                    >
                        <MoviesCard {...movie} />
                    </div>
                ))}
            </div>
            <div className="t-flex t-justify-end">
                <Button variant="outline">
                    <Link to={`/movies/${id}`} className="t-flex t-gap-2">
                        {STRING_GLOBAL.SEE_ALL}
                        <IconArrowLeft />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default MoviesCategory;
