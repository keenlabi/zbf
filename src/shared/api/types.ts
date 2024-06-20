export interface INetworkResponse {
    statusCode:string;
    message:string;
    data?:INetworkResponseData;
}

export interface INetworkResponseData {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string]:any;
}