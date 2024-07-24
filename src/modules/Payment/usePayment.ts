import { useState } from "react";
import { CreateOrderAction } from "src/shared/api/orders.api";
// import { CreateOrderAction } from "src/shared/api/orders.api";
import { IFormField, ISetFormField, setFormField } from "src/shared/components/FormWrapper";
import { createAlert } from "src/store/alert/atom";
// import { createAlert } from "src/store/alert/atom";
import { useNewOrderStateValue } from "src/store/orders/newOrder.atom";

export default function usePayment() {

    const newOrderState = useNewOrderStateValue();

    const [cardNameModel, setCardNameModel] = useState<IFormField>({
        label:"Name on card",
        name:"name-on-card",
        required: true,
        value:"",
        validated: false
    });

    const [cardNumberModel, setCardNumberModel] = useState<IFormField>({
        label:"Card number",
        name:"card-number",
        required: true,
        value:"",
        validated: false
    });

    const [cardCVVModel, setCardCVVModel] = useState<IFormField>({
        label:"CVV",
        name:"card-cvv",
        required: true,
        value:"",
        validated: false
    });

    const [cardExpiryDateModel, setCardExpiryDateModel] = useState<IFormField>({
        label:"Expiry",
        name:"card-expiry-date",
        required: true,
        value:"",
        validated: false
    });

    const [checkoutForm, setCheckoutForm] = useState({
        submittable: false,
        status:"idle"
    })

    function determineSetModel(model:IFormField):ISetFormField {
        switch(model.name) {
            case "name-on-card": return setCardNameModel;
            case "card-number": return setCardNumberModel;
            case "card-cvv": return setCardCVVModel;
            case "card-expiry-date": return setCardExpiryDateModel;
            default: return setCardNameModel
        }
    }

    function validateModel(model:IFormField):IFormField {
        if(model.required && !model.value) {
            model.validated = false;
            if(model.label) {
                model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            }
            if(model.label) {
                model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            }
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
        if( cardNameModel.validated && 
            cardNumberModel.validated && 
            cardCVVModel.validated &&
            cardExpiryDateModel.validated
        ) checkoutForm.submittable = true;
        else checkoutForm.submittable = false;
        
        setCheckoutForm({ ...checkoutForm });
    }

    function handlePayment() {
        setCheckoutForm(state => ({ ...state, status: "loading" }));

        CreateOrderAction({
            address: newOrderState.newOrder.address,
            contact: newOrderState.newOrder.contact
        })
        .then(()=> setCheckoutForm(state=> ({ ...state, status: "success" })))
        .catch((error)=> {
            setCheckoutForm(state=> ({ ...state, status: "failed" }))
            createAlert("error", error.message)
        })
    }

    return {
        cardNameModel,
        cardNumberModel,
        cardCVVModel,
        cardExpiryDateModel,
        handleModelChange,
        isFormSubmittable: checkoutForm.submittable,
        isSubmitLoading: checkoutForm.status === "loading",
        isFormSubmitSuccess: checkoutForm.status === "success" || null,
        price: newOrderState.newOrder.totalPrice,
        handlePayment
    }
}