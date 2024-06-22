import styles from "./createaccount.module.css";
import { Link } from "react-router-dom";
import InputField from "src/shared/components/InputField/InputField";
import emailIcon from "src/shared/assets/icons/email.svg";
import { Heading3 } from "src/shared/components/Headings/Headings";
import { SubHeading1 } from "src/shared/components/Headings/SubHeadings";
import FormWrapper from "src/shared/components/FormWrapper";
import SizedBox from "src/shared/components/SizedBox";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import Column from "src/shared/layout/Column";
import useCreateAccount from "./useCreateAccount";

export default function CreateAccount() {

  const { 
    emailModel, 
    passwordModel, 
    confirmPasswordModel, 
    handleModelChange,
    handleCreateAccount,
    isFormSubmittable,
    isSubmitLoading

  } = useCreateAccount();

  return (
    <Column
      startsAt="bottom"
      height={"100vh"}
      padding={{ left:"20px", right:"20px" }}
    >
      <div className={styles.loginForm}>
        <div className={styles.formHeading}>
          <Heading3>Create Account</Heading3>
          <SubHeading1>Kindly provide the following details to register</SubHeading1>
        </div>

        <SizedBox height="20px" />

        <FormWrapper extraStyle={styles.form}>
          <InputField
            label={emailModel.label}
            name={emailModel.name}
            required={emailModel.required}
            error={emailModel.error}
            onInput={(inputValue)=> handleModelChange(inputValue, emailModel)}
            suffixIcon={emailIcon}
          />

          <InputField 
            type="password"
            label={passwordModel.label}
            name={passwordModel.name}
            required={passwordModel.required}
            error={passwordModel.error}
            onInput={(inputValue)=> handleModelChange(inputValue, passwordModel)} 
          />

          <InputField
            type="password"
            label={confirmPasswordModel.label}
            name={confirmPasswordModel.name}
            required={confirmPasswordModel.required}
            error={confirmPasswordModel.error}
            onInput={(inputValue)=> handleModelChange(inputValue, confirmPasswordModel)} 
          />
          
          <PrimaryTextButton 
            action={handleCreateAccount}
            disabled={!isFormSubmittable}
            label="Create Account"
            isLoading={isSubmitLoading}
          />
        </FormWrapper>

        <SizedBox height="30px" />

        <div className={styles.linkToCreateAccount}>
          <div className={styles.text}>Already have an account?</div>
          <Link 
            className={"_orange"} 
            to={"/login"}
          >
            Login
          </Link>
        </div>
      </div>

      <SizedBox height="20vh" />
    </Column>
  );
}
