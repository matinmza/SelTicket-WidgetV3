import useDynamicLayout from "@/hooks/useDynamicLayout";
import MoviesCategoriesSection from "@/sections/movies-categories/views";
import { FC } from "react";

const MoviesCategoriesPage: FC = () => {
    useDynamicLayout({
        onBack: undefined,
        revalidate: true,
    });
    return (
        <div className="t-px-4">
            <MoviesCategoriesSection />
        </div>
    );
};

export default MoviesCategoriesPage;
