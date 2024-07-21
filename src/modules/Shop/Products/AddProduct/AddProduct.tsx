import styles from "./addproduct.module.css";
import FormWrapper from "src/shared/components/FormWrapper";
import InputField from "src/shared/components/InputField/InputField";
import SizedBox from "src/shared/components/SizedBox";
import TextField from "src/shared/components/TextField";
import { SubHeading5 } from "src/shared/components/Headings/SubHeadings";
import { FaPlus } from "react-icons/fa";
import SelectProductCategories from "./components/SelectProductCategories";
import GridList from "src/shared/components/List/GridList";
import Row from "src/shared/components/Row";
import ImagePicker from "src/shared/components/ImagePicker/ImagePicker";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import { useState } from "react";
import useAddProductForm from "./useAddProductForm";

export default function AddProduct() {

    const [openSelectCategorySection, setOpenSelectCategorySection] = useState(false);
    
    const { 
        productNameModel,
        productDescModel,
        productInventoryModel,
        productPriceModel,
        productImageModel,
        productCategoriesModel,
        handleModelValueChange,
        handleModelFileChange,
        isFormSubmittable,
        isFormLoading,
        submitCreateProduct

    } = useAddProductForm();

    return  <section className={styles.addProductSection}>
                <SubHeading5 children="Add Product" />
                
                <SizedBox height="30px" />
                
                <div className={styles.content}>
                    <ImagePicker 
                        label={productImageModel.label}
                        selectAction={(imageFile)=> handleModelFileChange([imageFile], productImageModel)}
                    />
                    <SizedBox height="20px" />
                    <div>
                        <FormWrapper >
                            <InputField 
                                type={productNameModel.type}
                                name={productNameModel.name}
                                label={productNameModel.label}
                                error={productNameModel.error}
                                required={productNameModel.required}
                                onInput={(inputvalue)=> handleModelValueChange(inputvalue, productNameModel)}
                            />
                            <TextField
                                type={productDescModel.type}
                                name={productDescModel.name}
                                label={productDescModel.label}
                                error={productDescModel.error}
                                required={productDescModel.required}
                                onInput={(inputvalue)=> handleModelValueChange(inputvalue, productDescModel)}
                            />
                        </FormWrapper>
                    </div>
                    
                    <SizedBox height="20px" />
                    
                    <div className={styles.selectCategories}>
                        <div className={styles.sectionLabel}>Categories</div>
                        <SizedBox height="10px" />
                        <GridList columnCount={6}>
                            {
                                productCategoriesModel.values?.map((category, index) => {
                                    return  <div 
                                                key={index}
                                                className={styles.category}
                                                children={category as string}
                                            />
                                })
                            }
                            <div className={styles.addCategoryBtn} onClick={()=> setOpenSelectCategorySection(true)}>
                                <FaPlus />
                                <span>Select category</span>
                            </div>
                        </GridList>
                    </div>

                    <SizedBox height="20px" />

                    <FormWrapper>
                        <Row alignment="top">
                            <InputField 
                                type={productInventoryModel.type}
                                name={productInventoryModel.name}
                                label={productInventoryModel.label}
                                error={productInventoryModel.error}
                                required={productInventoryModel.required}
                                onInput={(inputvalue)=> handleModelValueChange(inputvalue, productInventoryModel)}
                            />
                            <InputField 
                                type={productPriceModel.type}
                                name={productPriceModel.name}
                                label={productPriceModel.label}
                                error={productPriceModel.error}
                                required={productPriceModel.required}
                                onInput={(inputvalue)=> handleModelValueChange(inputvalue, productPriceModel)}
                            />
                        </Row>
                    </FormWrapper>

                    <SizedBox height="40px" />
                    
                    <div className={styles.buttons}>
                        <PrimaryTextButton 
                            label={"Submit product"}
                            isLoading={isFormLoading}
                            disabled={!isFormSubmittable}
                            action={()=> submitCreateProduct()}
                        />
                    </div>
                </div>

                { 
                    openSelectCategorySection &&
                    <SelectProductCategories
                        initialSelection={productCategoriesModel.values as string[] ?? []}
                        submitAction={(selectedCategories)=> handleModelValueChange(selectedCategories, productCategoriesModel)}
                        closeAction={()=> setOpenSelectCategorySection(false)} 
                    /> 
                }
            </section>
}