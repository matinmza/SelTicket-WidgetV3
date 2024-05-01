import api from "@/app/server";
import { CancelOrderDts, CheckOrderDts, OrdersDts } from "@/dtos/order.dto";
import { ICheckOrder, IOrder, IOrders } from "@/types/order";
import qs from "query-string";

import { IResponse } from "@/types/response/IResponse";
import { constants } from "@/utils/constants";
import { IReserveRes } from "@/types/reserve";
import { ReserveDto, SaleDto } from "@/dtos/reserve.dto";

export const orderController = api.injectEndpoints({
    endpoints: (build) => ({
        orders: build.query<IResponse<IOrders>, OrdersDts>({
            query: (dto) => {
                const params = qs.stringify({
                    Sort: "Default",
                    Size: constants.pageSize,
                    ...dto,
                });

                return `/General/Order?${params}`;
            },
            onQueryStarted: async (
                { Page },
                { dispatch, queryFulfilled, requestId }
            ) => {
                try {
                    // dispatch(setOrderApiLoading(true));
                    const { data } = await queryFulfilled;
                    // dispatch(
                    //     addOrders({
                    //         requestId,
                    //         data: data.data,
                    //         currentPage: Number(Page),
                    //     })
                    // );
                } catch (error) {
                    //
                }
            },
        }),
        checkOrder: build.query<IResponse<ICheckOrder>, CheckOrderDts>({
            query: (dto) => {
                const { orderId, applicationId } = dto;

                return {
                    method: "GET",
                    url: `/General/Order/Check/${orderId}/${applicationId}`,
                };
            },
        }),
        cancelOrder: build.query<IResponse<null>, CancelOrderDts>({
            query: (dto) => {
                const { orderId } = dto;

                return {
                    method: "GET",
                    url: `/General/Order/Cancel/${orderId}`,
                };
            },
            onQueryStarted: async (
                { orderId },
                { dispatch, queryFulfilled }
            ) => {
                try {
                    await queryFulfilled;
                    // dispatch(removeOrder({ orderId }));
                } catch (error) {
                    //
                }
            },
        }),
        reserve: build.mutation<IResponse<IReserveRes>, ReserveDto>({
            query: (dto) => ({
                method: "POST",
                url: `/General/Order/Reserve`,
                body: dto,
            }),
        }),
        finalOrder: build.mutation<IResponse<IOrder>, SaleDto>({
            query: (dto) => ({
                method: "POST",
                url: "/General/Order/Sale",
                body: dto,
            }),
        }),
    }),
});
export const {
    useLazyOrdersQuery,
    useLazyCheckOrderQuery,
    useLazyCancelOrderQuery,
    useReserveMutation,
    useFinalOrderMutation,
} = orderController;
