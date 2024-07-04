import { Outlet } from "react-router-dom";
import styles from "./home.module.css";
import Footer from "src/shared/components/Footer/Footer";
import Header from "src/shared/components/Header/Header";

export default function Home() {
  return (
    <div className={styles.dashboard_wrapper}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
