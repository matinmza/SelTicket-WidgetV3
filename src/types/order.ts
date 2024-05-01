// ----------------------------------------------------------------------

import { Order } from 'src/sections/book/enums';

import { EnumToPrimitiveUnion } from './general';

export type IOrder = {
    orderId: number;
    showName: string;
    placeName: string;
    showDay: string;
    showTime: string;
    showImageUrl: string;
    ticketCount: number;
    startAt: Date;
    status: EnumToPrimitiveUnion<Order>;
    transactionId: string;
    placeAddress: string;
};

export type IOrders = {
    result: IOrder[];
    totalRowCount: number;
};

export interface ICheckOrder {
    id: number;
    order_id: number;
    place_id: number;
    show_id: number;
    show_name: string;
    place_name: string;
    place_address: string;
    venue_name: string;
    place_lat: number;
    place_long: number;
    show_image_url: string;
    code: string;
    provider_code: string;
    owner_mobile: string;
    price: number;
    final_price: number;
    seller_final_price: number;
    customer_final_price: number;
    tax: number;
    start_at: string;
    start_at_date: string;
    start_at_hour: string;
    persian_date: string;
    created_at: string;
    created_at_hour: string;
    tickets_count: number;
    tickets: ITicket[];
    block_type: string;
    type: string;
    status: string;
}

export interface ITicket {
    id: number;
    price: number;
    final_price: number;
    block_name: string;
    code: string;
    block_type: string;
    seat_id: number;
    row: string;
    number: number;
    is_coupon_used: boolean;
}

export interface IOrderDetail {
    id: number;
    order_id: number;
    block_type: string;
    code: string;
    owner_mobile: string;
    show_name: string;
    place_name: string;
    place_address: string;
    price: number;
    price_id: number;
    final_price: number;
    customer_final_price: number;
    persian_date: string;
    show_image_url: string;
    created_at_hour: string;
    created_at: string;
    tickets_count: number;
    tickets: ITicket[];
    start_at_hour: string;
    start_at_date: string;
    start_at: string;
    status: string;
    tax: number;
}
