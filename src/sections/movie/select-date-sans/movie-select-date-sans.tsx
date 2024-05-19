import { selectActiveDateSans } from "@/features/movie/movie.selectors";
import { movieActions } from "@/features/movie/movie.slice";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import useAppSelector from "@/hooks/store/useAppSelector";
import { eachDayOfInterval, format, addDays } from "date-fns-jalali";
import { FC, useEffect } from "react";

const MovieSelectDateSans: FC = () => {
    const today = new Date();

    const sevenDays = eachDayOfInterval({
        start: today,
        end: addDays(today, 6),
    });
    const activeDateSans = useAppSelector(selectActiveDateSans);
    const dispatch = useAppDispatch();
    const onSelectDate = (value: Date) => {
        dispatch(movieActions.setActiveDateSans(value.toISOString()));
    };
    useEffect(() => {
        onSelectDate(sevenDays[0]);
    }, []);

    return (
        <div className="flex t-gap-2  t-max-w-screen t-overflow-scroll">
            {sevenDays.map((day) => {
                const isActive = day.toISOString() === activeDateSans;
                return (
                    <div
                        key={day.toISOString()}
                        className={
                            "t-relative t-border t-rounded-md t-font-12-regular  t-py-2 t-px-6 hover:t-bg-muted t-cursor-pointer" +
                            ` ${isActive ? "t-border-red-400" : ""}`
                        }
                        onClick={() => {
                            onSelectDate(day);
                        }}
                    >
                        {isActive && (
                            <div className="t-absolute t-right-2 t-top-2 t-rounded-full t-bg-red-400 t-w-2 t-h-2"></div>
                        )}

                        {format(day, "EEEE ")}
                    </div>
                );
            })}
        </div>
    );
};

export default MovieSelectDateSans;
