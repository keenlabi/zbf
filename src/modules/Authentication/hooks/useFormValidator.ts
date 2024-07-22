import { useState } from "react";
import { IFormField, ISetFormField, setFormField } from "src/shared/components/FormWrapper";

export default function useFormValidator() {

    const [isFormValidated, setIsFormValidated] = useState(false);

    function setInputField(inputValue:string|string[], model:IFormField, setModel:ISetFormField) {
        setFormField({
            inputValue,
            model, 
            setModel, 
            validateModel
        });
    }

    function validateModel(model:IFormField):IFormField {
        if(model.required && !model.value) {
            model.validated = false;
            model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            setIsFormValidated(false)
            return model;
        }

        setIsFormValidated(true)
        model.validated = true;
        model.error = "";
        return model
    }


    return {
        setInputField,
        isFormValidated: isFormValidated
    }
}