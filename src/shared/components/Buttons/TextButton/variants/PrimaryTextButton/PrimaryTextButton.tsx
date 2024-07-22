import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import styles from "./primarytextbutton.module.css";

type PrimaryTextButtonProps = {
  type?: "submit" | "reset" | "button" | undefined;
  extraStyle?: string;
  action?: () => void;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?:string;
  prefixIcon?: string;
  suffixIcon?: string;
  loaderColor?:string;
};

export default function PrimaryTextButton({
  width,
  type,
  action,
  label,
  disabled,
  isLoading,
  prefixIcon,
  suffixIcon,
  extraStyle,
  loaderColor

}: PrimaryTextButtonProps) {
  // console.log(disabled)
  return (
    <button
      type={type}
      className={`${extraStyle} ${styles.primaryButton}`}
      style={{width}}
      onClick={()=>!isLoading ?action?.() :null }
      disabled={disabled}
    >
      {prefixIcon ? <img className={styles.btn_image} src={prefixIcon} /> : null}
      {isLoading ? <CircularRingLoader color={loaderColor ?? "var(--white-accent-100)"} /> : <span className={styles.label}>{label}</span>}
      {suffixIcon ? <img className={styles.btn_image} src={suffixIcon} /> : null}
    </button>
  );
}
