import { atom, useRecoilState, useRecoilValue } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import { IAlert } from "./types";
import "src/shared/utility/stringPrototype.ts";

export const alerts:IAlert[] = [];

const alertAtom = atom({
    key: 'alert-atom',
    default: alerts
});

export const useAlertState = ()=> useRecoilState(alertAtom)
export const useAlertStateValue = ()=> useRecoilValue(alertAtom)

export function createAlert(status:"error"|"success", message:string, time?:number) {
    const feedbacks = getRecoil(alertAtom)
    setRecoil(alertAtom, [{ status, message: message.capitalizeFirstCharacter(), timeOutInSecs: time ?? 5 }, ...feedbacks])
}

export function removeAlert(feedbackIndex:number) {
    const feedbacks = [...getRecoil(alertAtom)];
    feedbacks.splice(feedbackIndex, 1)
    setRecoil(alertAtom, feedbacks)
}