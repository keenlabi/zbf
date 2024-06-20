import styles from "./ssntinform.module.css";
import lockImage from "src/shared/assets/images/security-lock-holding-password.svg";
import PrimaryTextButton from "src/shared/components/Buttons/IconButton/variants/PrimaryTextButton/PrimaryTextButton";
import InputField from "src/shared/components/InputField/InputField";

export default function SSNTINForm({ onIncrementCount }: { onIncrementCount: () => void }) {
  return (
    <div>
      <div className={styles.form_heading}>
        <img src={lockImage} alt="" />
        <h2>We are required by Law to collect SSN/Tin of Users</h2>
      </div>

      <div className={styles.form}>
        <InputField label="Social Security Number / TIN" onInput={() => {}} />

        <InputField label="Confirm Social Security Number / TIN" onInput={() => {}} />

        <InputField label="Date of Birth" onInput={() => {}} />

        <PrimaryTextButton label="Continue" action={() => onIncrementCount()} extrastyle={styles.btn} width="full" />
      </div>
    </div>
  );
}
