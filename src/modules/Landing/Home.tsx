import Logo from "src/shared/components/Logo/Logo";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Logo />
    </div>
  );
}

export default Home;
