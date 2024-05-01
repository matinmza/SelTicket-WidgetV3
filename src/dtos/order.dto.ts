import { PaginationDto } from './general.dto';

export interface OrdersDts extends PaginationDto {
    applicationId: string;
}

export interface CheckOrderDts {
    orderId: number;
    applicationId: string;
}

export interface CancelOrderDts {
    orderId: number;
}
