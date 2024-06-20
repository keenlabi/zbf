export interface IAlert {
    status:"error"|"success" // error, success
    message:string;
    timeOutInSecs:number;
}