import { IInputFieldModel } from "../InputField/InputField";
import FormWrapper from "./FormWrapper";
export default FormWrapper;

export interface IFormField extends IInputFieldModel {
    name:string;
    required:boolean;
    value:string;
    validated:boolean;
}

export type ISetFormField = React.Dispatch<React.SetStateAction<IFormField>>;

export interface ISetFormFieldFn {
    inputValue:string;
    model:IFormField;
    setModel:ISetFormField;
    validateModel?:(model:IFormField)=>IFormField;
    extraCallBack?:()=> void
}

export function setFormField({inputValue, model, setModel, validateModel, extraCallBack}:ISetFormFieldFn) {
    model.value = inputValue;
    extraCallBack?.()
    const validatedModel:IFormField = validateModel? validateModel(model) : model;
    setModel({...validatedModel});
}