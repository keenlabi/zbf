
import styles from "./googleauthiconbutton.module.css";
import IconButton from "../../IconButton";
import GoogleIcon from "src/shared/assets/icons/google-icon.svg?react";

export default function GoogleAuthIconButton() {
  return <IconButton
    label="Continue with Google"
    extraStyle={styles.googleAuth}
    prefixIcon={<GoogleIcon />}
    action={() => {}}
  />
}
