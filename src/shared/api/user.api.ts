import { IUserProfile } from "src/store/user/user.atom"
import { getFetch } from "./fetch"

export function FetchUserProfileAction() {
    return new Promise<{user:IUserProfile}>((resolve, reject) => {
        getFetch<{user:IUserProfile}>(`/user/profile`)
        .then((networkResponse)=> resolve(networkResponse.data))
        .catch((error)=> reject(error))
    })
}