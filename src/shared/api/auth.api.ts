import { postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { IUserProfile } from "src/store/user/user.atom";

export interface ILoginActionPayload {
    email:string;
    password:string;
}

interface IAuthNetworkResponseData {
    user:IUserProfile
}
type IAuthNetworkResponse = INetworkResponse<IAuthNetworkResponseData>;

// export function FetchAuthAction() {
//     return new Promise<IAuthNetworkResponse>((resolve, reject) => {
//         getFetch(()=> {})
//     })
// }

// register
export function RegisterAction(payload:ILoginActionPayload) {
    return new Promise<IAuthNetworkResponse>((resolve, reject)=> {
        postFetch<IAuthNetworkResponseData>("/auth/register", payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

// login
export function LoginAction(payload:ILoginActionPayload) {
    return new Promise<IAuthNetworkResponse>((resolve, reject)=> {
        postFetch<IAuthNetworkResponseData>("/auth/login", payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}