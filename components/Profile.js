import Image from "next/image";
import styles from "../styles/Profile.module.css";
import anonymous_profile from "../public/anonymous_profile.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";

export default function Profile() {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <Image src={anonymous_profile} alt="profile" />
      </div>
      <p className={styles.p}>Role</p>
      <p className={styles.p}>Name</p>
      <div className={styles.accountlink}>
        <a className={styles.image}>
          <Image src={phone} alt="phone" />
        </a>
        <a className={styles.image}>
          <Image src={mail} alt="mail" />
        </a>
        <a className={styles.image}>
          <Image src={twitter} alt="twitter" />
        </a>
        <a className={styles.image}>
          <Image src={facebook} alt="facebook" />
        </a>
      </div>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
