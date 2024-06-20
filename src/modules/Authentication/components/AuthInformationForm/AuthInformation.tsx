import InputField from "src/shared/components/InputField/InputField";
import PrimaryTextButton from "src/shared/components/Buttons/IconButton/variants/PrimaryTextButton/PrimaryTextButton";
import styles from "./authinformationform.module.css";

export default function AuthInformationForm({ onIncrementCount }: { onIncrementCount: () => void }) {
  return (
    <div>
      <div className={styles.form_heading}>
        <h2>Let’s have your Contact Information</h2>
      </div>

      <div className={styles.form}>
        <InputField label="Email address" onInput={() => {}} />

        <InputField label="Phone number" onInput={() => {}} />

        <InputField label="Choose a Username" onInput={() => {}} />

        <InputField label="Password" type="password" onInput={() => {}} />

        <InputField label="Confirm Password" type="password" onInput={() => {}} />

        <PrimaryTextButton label="Continue" action={() => onIncrementCount()} extrastyle={styles.btn} width="full" />
      </div>
    </div>
  );
}
