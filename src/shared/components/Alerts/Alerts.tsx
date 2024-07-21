import styles from "./alerts.module.css"
import { removeAlert, useAlertStateValue } from "src/store/alert/atom";
import ErrorFeedback from "./ErrorAlert";
import SuccessFeedback from "./SuccessAlert";

export default function Alerts() {

    const alerts = useAlertStateValue();
    
    return (
        <div className={styles.feedback_list_container}>
            {
                alerts.map((feedback, index) => {
                    return feedback.status === "error"
                    ?   <ErrorFeedback
                            key={index} 
                            message={feedback.message}
                            timeOutInSecs={feedback.timeOutInSecs}
                            close={()=> removeAlert(index)} 
                        />
                    :   <SuccessFeedback 
                            key={index} 
                            message={feedback.message}
                            timeOutInSecs={feedback.timeOutInSecs}
                            close={()=> removeAlert(index)} 
                        />
                })
            }
        </div>
    );
}