export interface ISelectorData<T> {
    error:boolean;
    message:string;
    data:T;
}

export interface IInitState {
    status:"idle"|"loading"|"failed"|"success";
    message:string;
}