import { IInputFieldModel } from "../InputField/InputField";
import FormWrapper from "./FormWrapper";
export default FormWrapper;

export interface IFormField extends IInputFieldModel {
    name:string;
    required:boolean;
    value?:string;
    values?:string[];
    files?:File[];
    validated:boolean;
}

export type ISetFormField = React.Dispatch<React.SetStateAction<IFormField>>;

export interface ISetFormFieldFn {
    model:IFormField;
    setModel:ISetFormField;
    validateModel?:(model:IFormField)=>IFormField;
    extraCallBack?:()=> void
}

export interface ISetInputFormFieldFn extends ISetFormFieldFn {
    inputValue:string|string[];
}

export function setFormField(data:ISetInputFormFieldFn) {
    if(Array.isArray(data.inputValue)) data.model.values = data.inputValue;
    else data.model.value = data.inputValue;

    data.extraCallBack?.()
    const validatedModel:IFormField = data.validateModel?.(data.model) || data.model;
    data.setModel({...validatedModel});
}

export interface ISetFileFormFieldFn extends ISetFormFieldFn {
    selectedFiles:File[];
}

export function setFileFormField({selectedFiles, model, setModel, validateModel, extraCallBack}:ISetFileFormFieldFn) {
    const oldFiles = model.files ?? [];
    const newFiles = [...selectedFiles, ...oldFiles];
    model.files = newFiles;

    extraCallBack?.()
    const validatedModel:IFormField = validateModel? validateModel(model) : model;
    setModel({...validatedModel});
}