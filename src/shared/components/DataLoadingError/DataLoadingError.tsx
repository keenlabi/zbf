import IconAlertCircle from "src/shared/assets/icons/icon-alert-circle.svg?react";
import styles from "./dataloadingerror.module.css";

export default function DataLoadingError({message, extraStyle}:{message:string, extraStyle?:string}) {
    return (
        <div className={`${styles.data_loading_error} ${extraStyle}`}>
            <IconAlertCircle className={styles.icon} />
            { message }
        </div>
    );
}