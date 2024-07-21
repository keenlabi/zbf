import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IGeneralApp {
    isModalOn:boolean;
}

export const generalAppInitState:IGeneralApp = {
    isModalOn: false
};

const GeneralAppAtom = atom({
    key: 'general-app-atom',
    default: generalAppInitState
});

export const useGeneralAppState = ()=> useRecoilState(GeneralAppAtom)
export const useGeneralAppStateValue = ()=> useRecoilValue(GeneralAppAtom)
export const useSetGeneralAppState = ()=> useSetRecoilState(GeneralAppAtom);