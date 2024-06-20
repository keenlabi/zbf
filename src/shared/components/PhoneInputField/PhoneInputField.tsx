import InputField from "../InputField/InputField";
// import styles from "./phoneinputfield.module.css";

export default function PhoneInputField({ error, disabled, onInput }: { disabled?: boolean; error?: string; onInput: () => void }) {
  return <InputField disabled={disabled} type="number" label="phone number" error={error} onInput={onInput} />;
}
