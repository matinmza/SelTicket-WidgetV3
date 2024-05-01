import api from "@/app/server";
import { AllShowsDts, ShowCinemasDts } from "@/dtos/cinema.dto";
import { ICinema, IMovie } from "@/types/cinema";

import { IResponse } from "@/types/response/IResponse";
import { IShow } from "@/types/show/show";

export const cinemaController = api.injectEndpoints({
    endpoints: (build) => ({
        showCinemas: build.query<IResponse<ICinema[]>, ShowCinemasDts>({
            query: (dto) => {
                const { showId, provinceId, cityId } = dto;

                return {
                    method: "GET",
                    url: `/General/Place?showId=${showId}&provinceId=${provinceId}&cityId=${cityId}`,
                };
            },
        }),
        allShows: build.query<IResponse<IShow[]>, AllShowsDts>({
            query: (dto) => {
                const { showId, placeId, date } = dto;

                return {
                    method: "GET",

                    url: `/General/Schedule/Schedules?placeId=${placeId}&showId=${showId}&date=${date}`,
                };
            },
            providesTags: [{ type: "show", id: "LIST" }],
        }),
        search: build.query<IResponse<IMovie[]>, string>({
            query: (searchTerm) => ({
                method: "GET",
                url: `/General/Show/Filter/${searchTerm}`,
            }),
        }),
    }),
});
export const {
    useLazyShowCinemasQuery,
    useLazyAllShowsQuery,
    useLazySearchQuery,
} = cinemaController;
