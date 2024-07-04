export interface INetworkResponse<T> {
    statusCode:number;
    message:string;
    data:T;
}

export interface INetworkResponseData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]:string|number|[]|object;
}