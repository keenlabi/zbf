import styles from "./inputfield.module.css";
import iconShow from "src/shared/assets/icons/Show.svg";
import iconHide from "src/shared/assets/icons/hide.svg";
import { useEffect, useState } from "react";
import SizedBox from "../SizedBox";

export interface IInputFieldModel {
  type?:"text"|"password"|"number"|"email"|"file";
  label?:string;
  error?:string;
  disabled?:boolean;
  suffixIcon?:string;
  placeholder?:string;
  prefixIcon?:string;
  inputWidth?:string;
  backgroundColor?:string;
}

export interface IInputFieldProps {
  type?:"text"|"password"|"number"|"email"|"file"|"date"|"time"|"month";
  label?:string;
  name?:string;
  error?:string;
  required?:boolean;
  disabled?:boolean;
  onInput:(value: string) => void;
  suffixIcon?:string;
  placeholder?:string;
  prefixIcon?:string;
  inputWidth?:string;
  backgroundColor?:string;
  maxLength?:number;
}

export default function InputField(props: IInputFieldProps) {

  const typesThatAreTextDefault = ["text","number","email","file","date","time","month"];
  const [currentSuffixIcon, setCurrentSuffixIcon] = useState(iconShow);

  const [currentInputType, setCurrentInputType] = useState<string>(typesThatAreTextDefault.includes(props.type!) ? "text" : props.type!);

  useEffect(() => {
    if (currentInputType !== props.type) setCurrentInputType(props.type === "month" || props.type === "date" || props.type === "time" || props.type === "text" ? "text" : props.type!);
  }, [currentInputType, props.type]);

  const handleChangeSuffixIcon = () => {
    if (currentSuffixIcon === iconShow) {
      setCurrentSuffixIcon(iconHide);
      setCurrentInputType("text");
    }
    if (currentSuffixIcon === iconHide) {
      setCurrentSuffixIcon(iconShow);
      setCurrentInputType("password");
    }
  };

  return (
    <div className={styles.input_field_wrapper} style={{ width: props.inputWidth }}>
      {
        props.label && <label
          className={styles.label} 
          children={props.label}
        />
      }

      <div className={styles.input_wrapper} style={props.backgroundColor ? { background: props.backgroundColor } : undefined}>
        {
          props.prefixIcon &&
          <span className={styles.prefix_icon}>
            <img src={props.prefixIcon} alt="" />
          </span>
        }

        <input
          type={currentInputType}
          name={props.name}
          onChange={(e) => props.onInput(e.target.value)}
          disabled={props.disabled}
          placeholder={props.placeholder ? props.placeholder : undefined}
          maxLength={props.maxLength}
          onFocus={() =>  typesThatAreTextDefault.includes(props.type!) && setCurrentInputType(props.type!)}
        />
        {props.type === "password" ? (
          <span className={styles.suffix_icon} onClick={handleChangeSuffixIcon}>
            <img src={currentSuffixIcon} alt="" />
          </span>
        ) : null}

        {
          props.suffixIcon && 
          <span className={styles.suffix_icon}>
            <img src={props.suffixIcon} alt="" />
          </span>
        }
      </div>
      <SizedBox height="5px" />
      {props.error ? (
        <div className={styles.error}>
          <p className={styles.error_text}>{props.error}</p>
        </div>
      ) : null}
    </div>
  );
}
