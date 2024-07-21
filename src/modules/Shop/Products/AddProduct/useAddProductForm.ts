import { useState } from "react";
import { createProductAction } from "src/shared/api/products.api";
import { IFormField, setFileFormField, setFormField } from "src/shared/components/FormWrapper";
import { uploadToCDN } from "src/shared/helpers/File.helpers";
import { createAlert } from "src/store/alert/atom";
import { useProductStateValue } from "src/store/products/product.atom";

export default function useAddProductForm() {

    const productState = useProductStateValue();

    const [createProductState, setCreateProductState] = useState(productState);

    const [productNameModel, setProductNameModel] = useState<IFormField>({
        type:"text",
        name: "product-name-model",
        label:"Product name",
        error:"",
        validated: false,
        value:"",
        files:[],
        required:true
    })

    const [productDescModel, setProductDescModel] = useState<IFormField>({
        type:"text",
        name: "product-desc-model",
        label:"Product description",
        error:"",
        validated: false,
        value:"",
        files:[],
        required:true
    })

    const [productInventoryModel, setProductInventoryModel] = useState<IFormField>({
        type:"number",
        name: "product-inventory-model",
        label:"Product inventory",
        error:"",
        validated: false,
        value:"",
        files:[],
        required:true
    })

    const [productPriceModel, setProductPriceModel] = useState<IFormField>({
        type: "number",
        name: "product-price-model",
        label: "Product price",
        error: "",
        validated: false,
        value: "",
        files:[],
        required: true
    })

    const [productImageModel, setProductImageModel] = useState<IFormField>({
        type: "file",
        name: "product-image-model",
        label: "Product image",
        error: "",
        validated: false,
        value: "",
        files:[],
        required: true
    });
    
    const [productCategoriesModel, setProductCategoriesModel] = useState<IFormField>({
        type: "text",
        name: "product-categories-model",
        label: "Product categories",
        error: "",
        validated: false,
        value: "",
        files:[],
        required: true
    });

    function determineSetModel(model:IFormField) {
        switch(model.name) {
            case "product-name-model": return setProductNameModel;
            case "product-desc-model": return setProductDescModel;
            case "product-inventory-model": return setProductInventoryModel;
            case "product-price-model": return setProductPriceModel;
            case "product-image-model": return setProductImageModel;
            case "product-categories-model": return setProductCategoriesModel;
            default: return setProductNameModel
        }
    }

    function handleModelValueChange(inputValue:string|string[], model:IFormField) {
        const setModelMatch = determineSetModel(model);
        setFormField({
            inputValue,
            model,
            setModel: setModelMatch,
            validateModel
        });
        
        validateForm()
    }

    function handleModelFileChange(selectedFiles:File[], model:IFormField) {
        const setModelMatch = determineSetModel(model);
        setFileFormField({
            selectedFiles,
            model,
            setModel: setModelMatch,
            validateModel
        });
        
        validateForm()
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

    const [formState, setFormState] = useState({
        submittable: false,
    })

    function validateForm() {
        const allModels = [productNameModel, productDescModel, productInventoryModel, productPriceModel, productImageModel, productCategoriesModel];
        allModels.forEach(model => {
            if(model.required && !model.validated) return setFormState({submittable: false})
        })
        return setFormState({ submittable: true })
    }

    function submitCreateProduct() {

        setCreateProductState(state => ({ ...state, status: "loading" }));

        uploadToCDN(productImageModel.files!)
        .then((imagesURLs)=> {
            createProductAction({
                name: productNameModel.value!,
                description: productDescModel.value!,
                imageURL: imagesURLs[0],
                price: Number(productPriceModel.value),
                categories: productCategoriesModel.values as string[],
                quantity: Number(productPriceModel.value)
            })
            .then((response)=> createAlert("success", response.message))
            .catch((error)=> createAlert("error", error.message))
            .finally(()=> setCreateProductState(state => ({ ...state, status: "idle" })))
        })
        .catch((error)=> createAlert("error", `There was an error uploading image: ${error.message}`))
        .finally(()=> setCreateProductState(state => ({ ...state, status: "idle" })))
    }

    return {
        productNameModel,
        productDescModel,
        productInventoryModel,
        productPriceModel,
        productImageModel,
        productCategoriesModel,
        handleModelValueChange,
        handleModelFileChange,
        isFormSubmittable: formState.submittable,
        isFormLoading: createProductState.status === "loading",
        submitCreateProduct
    }
}