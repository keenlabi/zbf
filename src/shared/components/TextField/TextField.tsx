import styles from "./textfield.module.css";

export default function TextField() {
  return (
    <div className={styles.text_field_wrapper}>
      <label htmlFor="text_field">{"test"}</label>
      <textarea name="" id="text_field" cols={30} rows={10}></textarea>
    </div>
  );
}
