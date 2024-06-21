export interface INetworkResponse<T> {
    statusCode:string;
    message:string;
    data?:T;
}

export interface INetworkResponseData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]:any;
}