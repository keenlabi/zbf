import styles from "./payment.module.css";
import { Heading5 } from "src/shared/components/Headings/Headings";
import { SubHeading5 } from "src/shared/components/Headings/SubHeadings";
import FormWrapper from "src/shared/components/FormWrapper";
import InputField from "src/shared/components/InputField/InputField";
import usePayment from "./usePayment";
import Row from "src/shared/components/Row";
import SizedBox from "src/shared/components/SizedBox";
import mcImage from "src/shared/assets/images/mc-image.png"
import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import formatCurrency from "src/shared/utility/formatCurrency";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Payment() {

  const navigate = useNavigate();

  const {
    cardNameModel,
    cardNumberModel,
    cardCVVModel,
    cardExpiryDateModel,
    handleModelChange,
    isFormSubmittable,
    handlePayment,
    price,
    isFormSubmitSuccess,
    isSubmitLoading

  } = usePayment();

  return (
    <section>
      {
        !isFormSubmitSuccess &&
        <div className={styles.paymentHeadings}>
          <div className={styles.paymentDetailsContainer}>
            <Heading5>Payment details</Heading5>
            <SubHeading5>Enter your payment details below to purchase.</SubHeading5>

            <SizedBox height="30px" />
            
            <FormWrapper>
              <InputField
                label={cardNameModel.label}
                name={cardNameModel.name}
                error={cardNameModel.error}
                onInput={(inputValue)=> handleModelChange(inputValue, cardNameModel)}
              />

              <Row alignment="top">
                <InputField
                  maxLength={16}
                  prefixIcon={mcImage}
                  inputWidth={"50%"}
                  label={cardNumberModel.label}
                  name={cardNumberModel.name}
                  error={cardNumberModel.error}
                  onInput={(inputValue)=> handleModelChange(inputValue, cardNumberModel)}
                />

                <InputField
                  maxLength={3}
                  inputWidth={"25%"}
                  label={cardCVVModel.label}
                  name={cardCVVModel.name}
                  error={cardCVVModel.error}
                  onInput={(inputValue)=> handleModelChange(inputValue, cardCVVModel)}
                />
                
                <InputField
                  inputWidth={"25%"}
                  type={"month"}
                  label={cardExpiryDateModel.label}
                  name={cardExpiryDateModel.name}
                  error={cardExpiryDateModel.error}
                  onInput={(inputValue)=> handleModelChange(inputValue, cardExpiryDateModel)}
                />
              </Row>
            </FormWrapper>

            <PrimaryTextButton 
              label={`Pay and complete order - ${formatCurrency({ amount: price })}`}
              isLoading={isSubmitLoading}
              disabled={!isFormSubmittable}
              action={()=> handlePayment()} 
            />
          </div>
        </div>
      }
      
      {
        isFormSubmitSuccess &&
        <div className={styles.orderSuccess}>
          <FaCheckCircle className={styles.orderSuccessIcon} />
          <div>
            <div className={styles.orderSuccessMessage}>Order placed successfully</div>
            <SizedBox height="10px" />
            <PrimaryTextButton
              extraStyle={styles.orderSuccessButton}
              label="Continue shopping"
              action={()=>  navigate("/products")}
            />
          </div>
        </div>
      }
    </section>
  );
}
