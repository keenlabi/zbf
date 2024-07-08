import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IInitState } from "../types";

export interface IUserProfile {
    id:string;
    email:string;
    createdAt:string;
    updatedAt:string;
}

export interface IUserState extends IInitState {
    profile:IUserProfile;
}

export const userInitState:IUserState = {
    status: "idle",
    profile: {
        id: "",
        email: "",
        createdAt: "",
        updatedAt: ""
    },
    message: ""
}

const userAtom = atom({
    key: "user-atom",
    default: userInitState
})

export const useUserState = ()=> useRecoilState(userAtom);
export const useUserStateValue = ()=> useRecoilValue(userAtom);
export const useSetUserState = ()=> useSetRecoilState(userAtom);