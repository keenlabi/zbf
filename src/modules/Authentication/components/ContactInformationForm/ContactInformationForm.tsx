import { Link } from "react-router-dom";
import InputField from "src/shared/components/InputField/InputField";
import PrimaryTextButton from "src/shared/components/Buttons/IconButton/variants/PrimaryTextButton/PrimaryTextButton";
import styles from "./contactinformationform.module.css";

export default function ContactInformationForm({ onIncrementCount }: { onIncrementCount: () => void }) {
  return (
    <div>
      <div className={styles.form_heading}>
        <h2>Welcome to Proxima Bank</h2>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className={styles.signin_link}>
            Sign in
          </Link>
        </p>
      </div>

      <div className={styles.form}>
        <InputField label="Enter your First name" onInput={() => {}} />

        <InputField label="Enter your last name" onInput={() => {}} />

        <InputField label="Your Occupation" onInput={() => {}} />

        <InputField label="Gender" onInput={() => {}} />

        <InputField label="Residential address" onInput={() => {}} />

        <InputField label="State" onInput={() => {}} />

        <InputField label="Country" onInput={() => {}} />

        <PrimaryTextButton label="Continue" action={() => onIncrementCount()} extrastyle={styles.btn} width="full" />
      </div>
    </div>
  );
}
