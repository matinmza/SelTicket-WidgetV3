import useDynamicLayout from "@/hooks/useDynamicLayout";
import useScrollToTop from "@/hooks/useScrollToTop";
import MoviesSection from "@/sections/movies/view/movies-section";
import { useNavigate } from "react-router-dom";

const MoviesPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        onBack: () => {
            navigate("/");
        },
        revalidate: true,
    });
    useScrollToTop();

    return (
        <div className="t-px-4">
            <MoviesSection />;
        </div>
    );
};

export default MoviesPage;
