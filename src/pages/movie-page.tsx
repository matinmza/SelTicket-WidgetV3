import { movieActions } from "@/features/movie/movie.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useDynamicLayout from "@/hooks/useDynamicLayout";
import useScrollToTop from "@/hooks/useScrollToTop";
import MovieSection from "@/sections/movie/view/movie-section";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        onBack: () => {
            navigate(-1);
        },
        revalidate: true,
    });
    useScrollToTop();
    const dispatch = useAppDispatch();
    useEffect(() => {
        return () => {
            dispatch(movieActions.setActiveMovie(undefined));
        };
    }, []);
    return <MovieSection />;
};

export default MoviePage;
