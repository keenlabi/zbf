import { postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { IUserProfile } from "src/store/user/user.atom";

export interface ILoginActionPayload {
    email:string;
    password:string;
}

export interface IAuthNetworkResponse extends INetworkResponse {
    data:{ user:IUserProfile }
}

// register
export function RegisterAction(payload:ILoginActionPayload) {
    return new Promise<IAuthNetworkResponse>((resolve, reject)=> {
        postFetch("/api/auth/register", payload)
        .then((response)=> resolve({
            ...response,
            data:{ user: response.data?.user }
        }))
        .catch((error)=> reject(error))
    })
}

// login
export function LoginAction(payload:ILoginActionPayload) {
    return new Promise<IAuthNetworkResponse>((resolve, reject)=> {
        postFetch("/api/auth/login", payload)
        .then((response)=> resolve({
            ...response,
            data:{ user: response.data?.user }
        }))
        .catch((error)=> reject(error))
    })
}