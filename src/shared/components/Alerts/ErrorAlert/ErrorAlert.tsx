import styles from "./erroralert.module.css";
import IconSadFace from "src/shared/assets/icons/icon-sad.svg?react";

export default function ErrorAlert({ message, timeOutInSecs, close }:{message:string, timeOutInSecs:number, close:()=> void}) {

    setTimeout(()=> close(), timeOutInSecs * 1000);
    
    return (
        <div className={styles.error_feedback} onClick={close}>
            <div className={styles.icon_sad_face}>
                <IconSadFace />
            </div>
            <div className={styles.message}>{message}</div>
        </div>
    );
}