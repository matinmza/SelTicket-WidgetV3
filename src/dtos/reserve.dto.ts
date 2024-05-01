export type ReserveDto = {
    applicationId: string;
    block_id: string;
    schedule_id: string;
    seat_ids: number[];
};

export type SaleDto = {
    applicationId: string;
    order_id: number;
};
