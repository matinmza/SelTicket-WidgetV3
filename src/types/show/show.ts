export interface IShow {
    id: number;
    title: string;
    description: null;
    prices: number[];
    show_id: number;
    show_name: string;
    venue_id: number;
    venue_name: string;
    place_id: number;
    place_name: string;
    sales_start_at: Date | string;
    sales_end_at: Date | string;
    date: Date | string;
    start_at: string;
    persian_date: string;
    status: string;
}

export interface ISaans {
    id: number;
    start_at: string;
}
