import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      copyright &copy; 2024, by <a className={styles.link_to_mail} href="https://mail.google.com/mail/?view=cm&fs=1&to=keenlabinc@gmail.com">elevenkin</a>
    </div>
  );
}
