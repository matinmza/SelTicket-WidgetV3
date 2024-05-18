import { movieActions } from "@/features/movie/movie.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { IMovie } from "@/types/cinema";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

const MoviesCardSmall: FC<IMovie> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleMovie = () => {
        dispatch(movieActions.setActiveMovie({ ...props }));
        navigate("/movie");
    };
    return (
        <div
            onClick={handleMovie}
            className="t-flex t-cursor-pointer t-gap-2 hover:t-bg-muted t-p-3 t-transition t-rounded-md"
        >
            <img
                className="t-w-12 t-h-12 t-flex-shrink-0 t-rounded-full"
                src={props.image_url}
                alt="image-url"
            />

            <div className="t-flex t-flex-col">
                <h2 className="t-font-14-bold">{props.title}</h2>
                <p className="t-font-12-regular t-line-clamp-1">
                    {props.about_show}
                </p>
            </div>
        </div>
    );
};

export default MoviesCardSmall;
