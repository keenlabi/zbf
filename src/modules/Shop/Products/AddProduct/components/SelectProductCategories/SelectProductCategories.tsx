import { useEffect, useState } from "react";
import styles from "./selectproductcategories.module.css";
import { FetchProductCategoriesAction } from "src/shared/api/products.api";
import { useProductCategoriesState } from "src/store/products/productCategories/productCategories.atom";
import DataLoadingError from "src/shared/components/DataLoadingError";
import Modal from "src/shared/components/Modal";
import ComponentLoader from "src/shared/components/Loaders/ComponentLoader";
import { capitalizeFirstCharacter } from "src/shared/utility/stringPrototype";

/**
 * 
 * A modal that provides a total list of all product categories.
 * If the product category is not in this list, it links to another component
 * to add a new category to that list.
 * 
 * @returns an array of strings (product names)
 */

interface IAddProductCategoriesProps {
    initialSelection:string[];
    submitAction:(selection:string[])=> void;
    closeAction:()=> void;
}

export default function SelectProductCategories(props:IAddProductCategoriesProps) {

    const [productCategoriesState, setProductCategoriesState] = useProductCategoriesState()
    const [fetchProductCategories, setFetchProductCategory] = useState(productCategoriesState);
    
    const [selectedCategories, setSelectedCategories] = useState<string[]>([...props.initialSelection]);

    function selectCategory(categoryName:string) {
        if(!selectedCategories.includes(categoryName)) selectedCategories.push(categoryName);
        setSelectedCategories([...selectedCategories]);
    }

    function submitSelection() {
        props.submitAction(selectedCategories)
        props.closeAction();
    }

    useEffect(()=> {
        setFetchProductCategory(state => ({ ...state, status: "loading" }));

        FetchProductCategoriesAction()
        .then((response)=> {
            setFetchProductCategory(state => ({ ...state, status: "success" }));
            setProductCategoriesState(state => ({ 
                ...state,
                categories: response.data.categories
            }));
        })
        .catch((error)=> setFetchProductCategory(state => ({ 
            ...state, 
            status: "failed",
            message: error.message
        })))

    }, [selectedCategories, setProductCategoriesState])

    return  <Modal 
                close={()=> props.closeAction()}
                type={"centered"}
                size={{ width:"400px", height:"400px" }}
                heading={"Product Categories List"}
            >
                <div className={styles.selectProductCategoriesContainer}>
                    { 
                        fetchProductCategories.status === "failed"
                        ?   <DataLoadingError message={fetchProductCategories.message} />
                        :   fetchProductCategories.status === "loading"
                            ?   <ComponentLoader />
                            :   <div className={styles.productCategoriesList}>
                                    {
                                        productCategoriesState.categories.map(category => {
                                            return  <div 
                                                        key={category.id} 
                                                        className={`${styles.categoryListItem} ${selectedCategories.includes(category.name) && styles._active}`} 
                                                        children={capitalizeFirstCharacter(category.name)}
                                                        onClick={()=> !selectedCategories.includes(category.name) && selectCategory(category.name)}
                                                    />
                                        })
                                    }
                                </div>
                    }
                    {
                        selectedCategories.length
                        ?   <div 
                                className={styles.modalFooter} 
                                onClick={()=> submitSelection()}
                                children={`Click to submit ${selectedCategories.length} selections`}
                            />
                        :   null
                    }
                </div>
            </Modal>
}