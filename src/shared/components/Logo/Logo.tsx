import styles from "./logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Link to={"/"}>
        <div className={styles.text}>ZBF</div>
      </Link>
    </div>
  );
}
