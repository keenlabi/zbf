import { postFetch } from "src/shared/api/fetch"
import { INetworkResponse } from "./types";
import { IUserProfile } from "src/store/user/user.atom";

export interface ILoginActionPayload {
    email:string;
    password:string;
}

// register
export function RegisterAction(payload:ILoginActionPayload) {
    return new Promise<INetworkResponse<{user:IUserProfile}>>((resolve, reject)=> {
        postFetch("/api/auth/register", payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}

// login
export function LoginAction(payload:ILoginActionPayload) {
    return new Promise<INetworkResponse<{user:IUserProfile}>>((resolve, reject)=> {
        postFetch("/api/auth/login", payload)
        .then((response)=> resolve(response))
        .catch((error)=> reject(error))
    })
}