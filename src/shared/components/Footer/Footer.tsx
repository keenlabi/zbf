import styles from "./footer.module.css";

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
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_left}>
          <p>
            Contact us{" "}
            <a className={styles.link_to_mail} href="https://mail.google.com/mail/?view=cm&fs=1&to=funmilayobamijoko10@gmail.com">
              funmilayobamijoko10@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.footer_bottom_right}>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
        </div>
      </div>
    </div>
  );
}
