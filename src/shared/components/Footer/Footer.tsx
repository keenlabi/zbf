import InputField from "../InputField/InputField";
import styles from "./footer.module.css";
import emailIcon from "src/shared/assets/icons/email.svg";
import fbIcon from "src/shared/assets/icons/Fb.svg";
import twIcon from "src/shared/assets/icons/Tw.svg";
import igIcon from "src/shared/assets/icons/Ig.svg";
import lnIcon from "src/shared/assets/icons/Ln.svg";
import PrimaryTextButton from "../Buttons/TextButton/variants/PrimaryTextButton/PrimaryTextButton";

export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_left}>
          <h3>Subscribe to our newsletter</h3>
          <p>
            Never miss a beat. <br /> Get a weekly discounts, bonus, trends, and price slashes in your inbox.
          </p>
        </div>

        <div className={styles.footer_top_right}>
          <InputField type="text" onInput={() => {}} prefixIcon={emailIcon} inputWidth="400px" backgroundColor="#fff" />
          <PrimaryTextButton label="Subscribe" action={() => {}} extrastyle={styles.subscribe_btn} />
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_left}>
          <p>
            Contact us{" "}
            <a className={styles.email} href="">
              hello@raynaui.com
            </a>
          </p>

          <div className={styles.socials}>
            Follow us
            <ul>
              <li>
                <img src={fbIcon} alt="" />
              </li>
              <li>
                <img src={twIcon} alt="" />
              </li>
              <li>
                <img src={igIcon} alt="" />
              </li>
              <li>
                <img src={lnIcon} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_bottom_right}>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
        </div>
      </div>
    </div>
  );
}
