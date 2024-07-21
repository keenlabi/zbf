import { useState } from "react";
import { LoginAction } from "src/shared/api/auth.api";
import { IFormField, setFormField } from "src/shared/components/FormWrapper";
import { createAlert } from "src/store/alert/atom";
import { useUserState } from "src/store/user/user.atom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {

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

    const [loginForm, setLoginForm] = useState({
        submittable: false,
    })

    function determineSetModel(model:IFormField) {
        switch(model.name) {
            case "email-model": return setEmailModel;
            case "password-model": return setPasswordModel;
            default: return setEmailModel
        }
    }

    function validateModel(model:IFormField):IFormField {
        if(model.required && !model.value) {
            model.validated = false;
            model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            return model;
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
        if(!emailModel.validated) return setLoginForm({submittable: false})
        if(!passwordModel.validated) return setLoginForm({submittable: false})
        
        return setLoginForm({ submittable: true })
    }

    function handleLogin() {
        if(!loginForm.submittable) return;
        setUserState(state => ({ ...state, status: "loading" }))

        LoginAction({ email: emailModel.value!, password: passwordModel.value! })
        .then((response)=> {
            setUserState(state => ({ ...state, profile: response.data.user }))
            authenticateUser();
            navigate("/cart")
        })
        .catch((error)=> createAlert("error", error.message))
        .finally(()=> setUserState(state => ({ ...state, status: "idle" })))
    }

    return {
       emailModel,
       passwordModel,
       handleModelChange,
       handleLogin,
       isFormSubmittable: loginForm.submittable,
       isSubmitLoading: userState.status === "loading"
    }
}