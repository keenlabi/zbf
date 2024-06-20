import styles from "./signupprogress.module.css";
import arrowLeft from "src/shared/assets/icons/arrow_left.svg";

export default function SignupProgress({ stepCount, action }: { stepCount: number; action: () => void }) {
  return (
    <div className={styles.progress_wrapper}>
      {stepCount >= 2 ? (
        <div className={styles.goback} onClick={action}>
          <img src={arrowLeft} alt="" />
          <span>Go back</span>
        </div>
      ) : null}

      {stepCount < 4 ? (
        <div className={styles.steps}>
          <p>Step {stepCount} of 3</p>
        </div>
      ) : null}
    </div>
  );
}
