import api from "@/app/server";
import { GetSeatsDts } from "@/dtos/seat.dto";

import { IResponse } from "@/types/response/IResponse";
import { ISeats, ISeatsStatus } from "@/types/seat";

export const orderController = api.injectEndpoints({
    endpoints: (build) => ({
        seatsStatus: build.query<IResponse<ISeatsStatus>, GetSeatsDts>({
            query: (dto) => {
                const { scheduleId } = dto;

                return {
                    method: "GET",
                    url: `/General/Schedule/SeatStatus/${scheduleId}?scheduleId=${scheduleId}`,
                };
            },
            keepUnusedDataFor: 1,
        }),
        seats: build.query<IResponse<ISeats>, GetSeatsDts>({
            query: (dto) => {
                const { scheduleId } = dto;

                return {
                    method: "GET",
                    url: `/General/Schedule/Seats/${scheduleId}?scheduleId=${scheduleId}`,
                };
            },
            keepUnusedDataFor: 1,
        }),
    }),
});
export const { useSeatsQuery, useSeatsStatusQuery } = orderController;
