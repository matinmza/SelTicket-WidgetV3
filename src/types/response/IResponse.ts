export interface IResponse<T> {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    warnings: any;
    data: T;
}
