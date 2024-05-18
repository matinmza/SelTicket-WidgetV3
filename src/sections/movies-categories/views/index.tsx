import { useCategoriesQuery } from "@/controllers/category.controller";
import MoviesCategory from "../movies-category";
import MoviesSearchInput from "../movies-search-input";
import { STRING_GLOBAL } from "@/constants/string.constants";

const MoviesCategoriesSection = () => {
    const { data: categoriesData, isLoading } = useCategoriesQuery(null);

    return (
        <div className="t-py-5">
            <MoviesSearchInput />
            {isLoading && (
                <div className="t-py-10 t-text-foreground t-flex t-items-center t-justify-center">
                    {STRING_GLOBAL.PLEASE_WAIT}
                </div>
            )}
            {categoriesData?.data.map((category) => (
                <MoviesCategory
                    key={category.id}
                    id={category.id}
                    title={category.title}
                />
            ))}
        </div>
    );
};

export default MoviesCategoriesSection;
