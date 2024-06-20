import styles from "./primarytextbutton.module.css";

type PrimaryTextButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  extrastyle?: string;
  action?: () => void;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: "auto" | "full";
  prefixIcon?: string;
  suffixIcon?: string;
};

export default function PrimaryTextButton({
  type,
  action,
  label,
  disabled,
  isLoading,
  prefixIcon,
  suffixIcon,
}: PrimaryTextButtonProps) {
  // console.log(disabled)
  return (
    <button
      type={type}
      className={styles.primaryButton}
      onClick={()=>!isLoading ?action?.() :null }
      disabled={disabled}
    >
      {prefixIcon ? <img className={styles.btn_image} src={prefixIcon} /> : null}
      {isLoading ? <span className={styles.label}>Loading...</span> : <span className={styles.label}>{label}</span>}
      {suffixIcon ? <img className={styles.btn_image} src={suffixIcon} /> : null}
    </button>
  );
}
