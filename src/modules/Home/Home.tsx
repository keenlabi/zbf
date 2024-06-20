import styles from "./dashboard.module.css";
import Footer from "src/shared/components/Footer/Footer";
import Header from "src/shared/components/Header/Header";
import Sidebar from "src/shared/components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className={styles.dashboard_wrapper}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <div></div>
      </main>

      <Footer />
    </div>
  );
}
