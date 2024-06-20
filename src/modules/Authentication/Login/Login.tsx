import styles from "./login.module.css";
import { Link } from "react-router-dom";
import InputField from "src/shared/components/InputField/InputField";
import emailIcon from "src/shared/assets/icons/email.svg";
import { Heading3 } from "src/shared/components/Headings/Headings";
import { SubHeading1 } from "src/shared/components/Headings/SubHeadings";
import FormWrapper from "src/shared/components/FormWrapper";
import SizedBox from "src/shared/components/SizedBox";
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import Column from "src/shared/layout/Column";
import useLogin from "./useLogin";

export default function Login() {

  const {
    emailModel,
    passwordModel,
    handleModelChange,
    isFormSubmittable,
    handleLogin

  } = useLogin();

  return (
    <Column
      startsAt="bottom"
      height={"100vh"}
      padding={{ left:"20px", right:"20px" }}
    >
      <div className={styles.loginForm}>
        <div className={styles.formHeading}>
          <Heading3>Log In</Heading3>
          <SubHeading1>Enter your credentials to access your account</SubHeading1>
        </div>

        <SizedBox height="40px" />

        <FormWrapper extraStyle={styles.form}>
          <InputField
            label={emailModel.label}
            name={emailModel.name}
            suffixIcon={emailIcon} 
            error={emailModel.error}
            onInput={(inputValue)=> handleModelChange(inputValue, emailModel)}
          />

          <InputField 
            type="password"
            name={passwordModel.name}
            label={passwordModel.label}
            error={passwordModel.error}
            onInput={(inputValue)=> handleModelChange(inputValue, passwordModel)}
          />
          
          <PrimaryTextButton 
            action={handleLogin} 
            label="Log into Account" 
            disabled={!isFormSubmittable}
          />
        </FormWrapper>

        <SizedBox height="30px" />

        <div className={styles.linkToCreateAccount}>
          <div className={styles.text}>First time?</div>
          <Link 
            className={"_orange"} 
            to={"/create-account"}
          >
            Create Account
          </Link>
        </div>
      </div>

      <SizedBox height="20vh" />
    </Column>
  );
}
