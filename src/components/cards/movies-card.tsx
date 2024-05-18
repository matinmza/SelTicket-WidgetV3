import { IMovie } from "@/types/cinema";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { useNavigate } from "react-router-dom";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { movieActions } from "@/features/movie/movie.slice";

const MoviesCard: FC<IMovie> = (props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleMovie = () => {
        dispatch(movieActions.setActiveMovie({ ...props }));
        navigate("/movie");
    };
    return (
        <div onClick={handleMovie}>
            <div className="t-rounded-lg t-shadow t-overflow-hidden hover:t-scale-105 t-cursor-pointer t-transition-all t-duration-300">
                <div className="relative">
                    <img
                        className="t-h-[516px] sm:t-h-[416px] md:t-h-[350px] lg:t-h-[426px] t-object-cover  t-w-full"
                        src={props.image_url}
                    />
                </div>
                <div className="t-bg-muted t-p-4">
                    <div className="t-flex t-justify-between t-items-center">
                        <div>
                            <h2 className="t-font-14-bold t-text-foreground">
                                {props.title}
                            </h2>
                        </div>
                        <div className="t-flex t-relative t-h-10 t-gap-1">
                            {props.actors
                                .filter((i) => i.image_url)
                                .slice(0, 2)
                                .map((actor, index) => (
                                    <Avatar
                                        key={actor.id}
                                        className={"t-border t-border-white"}
                                    >
                                        <AvatarImage
                                            className="t-object-cover"
                                            src={actor.image_url}
                                        />
                                        <AvatarFallback className="t-bg-accent">
                                            <User className="t-text-foreground" />
                                        </AvatarFallback>
                                    </Avatar>
                                ))}
                        </div>
                    </div>

                    <div className="t-pt-4 t-line-clamp-4 t-font-12-regular t-min-h-[93px]">
                        {props.about_show}
                    </div>
                    <div className="t-flex t-gap-2 t-pt-4 t-font-12-medium">
                        <p>{STRING_GLOBAL.DIRECTOR}:</p>
                        <p>
                            {(props.directors.length > 0 &&
                                props.directors[0]["name"]) ||
                                "--"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;
