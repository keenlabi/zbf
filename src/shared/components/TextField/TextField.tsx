import styles from "./textfield.module.css";

interface ITextAreaProps {
  type?:string;
  label?:string;
  name?:string;
  hint?:string;
  defaultValue?:string;
  error?:string;
  required?:boolean;
  onInput:(textValue:string)=> void;
  onAttach?:(name:string)=> void;
  allowAttachments?:boolean;
}

export default function TextField(props:ITextAreaProps) {
  return  <div className={styles.text_field_container}>
            <div className={styles.label}>{props.label}</div>
            <textarea
              className={styles.text_area}
              placeholder={props.hint}
              defaultValue={props.defaultValue}
              onInput={(e:React.FormEvent<HTMLTextAreaElement>) => props.onInput(e.currentTarget.value)}
            />
            <div className={styles.error}> { props.error } </div>
          </div>
}
