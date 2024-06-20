import styles from "./successalert.module.css";
import IconConfetti  from "src/shared/assets/icons/icon-confetti.svg?react";

export default function SuccessAlert({ message, timeOutInSecs, close }:{message:string, timeOutInSecs:number, close:()=> void}) {
    
    setTimeout(()=> close(), timeOutInSecs * 1000);
    
    return (
        <div className={styles.success_alert} onClick={close}>
            <IconConfetti className={styles.icon_ill} />
            <div>{message}</div>
        </div>
    );
}