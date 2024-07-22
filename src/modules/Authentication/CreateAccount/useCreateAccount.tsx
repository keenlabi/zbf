import { useState } from "react";
import { RegisterAction } from "src/shared/api/auth.api";
import { IFormField, setFormField } from "src/shared/components/FormWrapper";
import { createAlert } from "src/store/alert/atom";
import { useUserState } from "src/store/user/user.atom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function useCreateAccount() {

    const [userState, setUserState] = useUserState();

    const { authenticateUser } = useAuth();

    const navigate = useNavigate()

    const [emailModel, setEmailModel] = useState<IFormField>({
        label:"Email address",
        name:"email-model",
        required: true,
        value:"",
        validated: false
    });
    const [passwordModel, setPasswordModel] = useState<IFormField>({
        label:"Password",
        name:"password-model",
        required: true,
        value:"",
        validated: false
    });
    const [confirmPasswordModel, setConfirmPasswordModel] = useState<IFormField>({
        label:"Confirm password",
        name:"confirm-password-model",
        required: true,
        value:"",
        validated: false
    });

    const [createAccountForm, setCreateAccountForm] = useState({
        submittable: false,
    })

    function determineSetModel(model:IFormField) {
        switch(model.name) {
            case "email-model": return setEmailModel;
            case "password-model": return setPasswordModel;
            case "confirm-password-model": return setConfirmPasswordModel;
            default: return setEmailModel
        }
    }

    function validateModel(model:IFormField):IFormField {
        if(model.required && !model.value) {
            model.validated = false;
            model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            return model;
        }

        if(model.name === "confirm-password-model") {
            if(model.value !== passwordModel.value) {
                model.validated = false;
                model.error = `${model.label} must match password`;
                return model;
            }
        }

        model.validated = true;
        model.error = "";
        return model
    }

    function handleModelChange(inputValue:string, model:IFormField) {
        
        const setModelMatch = determineSetModel(model);
        
        setFormField({
            inputValue, 
            model, 
            setModel: setModelMatch, 
            validateModel
        });

        validateForm()
    }

    function validateForm() {
        if(!emailModel.validated) return setCreateAccountForm({submittable: false})
        if(!passwordModel.validated) return setCreateAccountForm({submittable: false})
        if(!confirmPasswordModel.validated) return setCreateAccountForm({submittable: false})
        
        return setCreateAccountForm({ submittable: true })
    }

    function handleCreateAccount() {
        if(!createAccountForm.submittable) return;
        
        setUserState(state => ({
            ...state,
            status: "loading"
        }))

        RegisterAction({ 
            email: emailModel.value!,
            password: passwordModel.value!
        })
        .then((response)=> {
            setUserState(state => ({ ...state, profile: response.data.user }));
            authenticateUser();
            navigate("/cart")
        })
        .catch((error)=> createAlert("error", error.message))
        .finally(()=> setUserState(state => ({ ...state, status: "idle" })))
    }

    return {
       emailModel,
       passwordModel,
       confirmPasswordModel,
       isFormSubmittable: createAccountForm.submittable,
       handleModelChange,
       handleCreateAccount,
       isSubmitLoading: userState.status === "loading"
    }
}