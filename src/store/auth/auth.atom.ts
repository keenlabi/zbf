import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IAuth extends IInitState {
    isAuthenticated:boolean;
}

export const authInitState:IAuth = {
    isAuthenticated: false,
    status: "idle",
    message: ""
}

const authAtom = atom({
    key: "auth-atom",
    default: authInitState
})

export const useAuthState = ()=> useRecoilState(authAtom);
export const useAuthStateValue = ()=> useRecoilValue(authAtom);
export const useSetAuthState = ()=> useSetRecoilState(authAtom);