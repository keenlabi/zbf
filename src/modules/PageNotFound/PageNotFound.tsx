import PrimaryTextButton from "src/shared/components/Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";
import styles from "./pagenotfound.module.css";
import { useNavigate } from "react-router-dom";
import Header from "src/shared/components/Header/Header";
import Footer from "src/shared/components/Footer/Footer";

export default function PageNotFound() {
    const navigate = useNavigate();

    return  <div className={styles.page_not_found}>
                <Header />
                <div className={styles.page_section}>
                    <div className={styles.error_message}>Page not found</div>
                    <PrimaryTextButton 
                        label="Continue shopping"
                        action={()=> navigate("/products")}
                    />
                </div>
                <Footer />
            </div>
}