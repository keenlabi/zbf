import CircularRingLoader from "src/shared/components/Loaders/CircularRingLoader";
import styles from "./iconbutton.module.css";
import { ReactNode } from "react";

export default function IconButton(props: {
  type?:"button"|"submit"|"reset";
  label: string;
  width?: string;
  height?: string;
  extraStyle?:string;
  prefixIcon?:JSX.Element;
  suffixIcon?:ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: string;
  action: () => void;
}) {
  return (
    <button
      className={`${styles.icon_btn_container} ${props.extraStyle}`}
      onClick={() => (!props.isLoading ? props.action() : null)}
      disabled={props.disabled}
      style={{ width: props?.width, height: props?.height }}
    >
      {props.isLoading ? (
        <div className={styles.loader_wrapper}>
          <CircularRingLoader color={props.loaderColor || "white"} />
        </div>
      ) : (
        <div className={styles.btn_content}>
          {props?.prefixIcon}
          <div className={styles.label}>{props.label}</div>
          {props?.suffixIcon}
        </div>
      )}
    </button>
  );
}
