export interface ISeats {
    blocks: IBlock[];
    schema: string[];
}

export interface IBlock {
    block_id: number;
    seats: Array<Array<string>>;
}

export interface ISeat {
    id: number;
    schedule_seat_id: string;
    seat_id: string;
    x: string;
    y: string;
    type: string;
    row: string;
    number: string;
    price: number;
}

export interface ISeatsStatus {
    [key: string]: any;
}
