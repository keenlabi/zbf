import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IFormField, ISetFormField, setFormField } from "src/shared/components/FormWrapper";
import { useCartStateValue } from "src/store/cart/cart.atom";
import { useSetNewOrderState } from "src/store/orders/newOrder.atom";

export default function useCheckout() {

    const navigate = useNavigate();

    const cartState = useCartStateValue();

    const setNewOrderState = useSetNewOrderState();

    useEffect(()=> {
        let totalTemp = 0;
        cartState.cart.items.forEach(item => {
            totalTemp += (item.product.price * item.quantity)
        })
        setCartTotal(totalTemp)
        
    }, [cartState.cart.items])

    const [cartTotal, setCartTotal] = useState(0);

    const [checkoutAddressModel, setCheckoutAddressModel] = useState<IFormField>({
        placeholder:"Address",
        name:"checkout-address",
        required: true,
        value:"",
        validated: false
    });

    const [checkoutContactModel, setCheckoutContactModel] = useState<IFormField>({
        placeholder:"Contact",
        name:"checkout-contact",
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
            case "checkout-address": return setCheckoutAddressModel;
            case "checkout-contact": return setCheckoutContactModel;
            default: return setCheckoutAddressModel
        }
    }

    function validateModel(model:IFormField):IFormField {
        if(model.required && !model.value) {
            model.validated = false;
            if(model.label) {
                model.error = `${model.label ?model.label :"This"} field cannot be empty`;
            }
            if(model.placeholder) {
                model.error = `${model.placeholder ?model.placeholder :"This"} field cannot be empty`;
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
        if(checkoutAddressModel.validated && checkoutContactModel.validated) 
            checkoutForm.submittable = true;
        else checkoutForm.submittable = false;
        
        setCheckoutForm({ ...checkoutForm });
    }

    function handleCheckout() {
        setCheckoutForm(state => ({ ...state, status: "loading" }));

        setNewOrderState(state => ({
            ...state,
            newOrder:{
                address: checkoutAddressModel.value!,
                contact: checkoutContactModel.value!,
                totalPrice: cartTotal
            }
        }))

        navigate("/payment");
    }

    return {
        checkoutAddressModel,
        checkoutContactModel,
        handleModelChange,
        isFormSubmittable: checkoutForm.submittable,
        isSubmitLoading: checkoutForm.status === "loading",
        isFormSubmitSuccess: checkoutForm.status === "success" || null,
        cartTotal,
        handleCheckout
    }
}