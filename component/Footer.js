import Image from "next/image";
import styles from "../styles/Footer.module.css";
import logo from "../public/SElogo.svg";
import facebook from "../public/fb_footer.svg";
import instagram from "../public/ig_footer.svg";
import twitter from "../public/twitter_footer.svg";
import location from "../public/location.svg";
import phone from "../public/phone_footer.svg";
import email from "../public/email.svg";

export default function Footer() {
  return (
    <div className={styles.footerbox}>
      <div>
        <div className={styles.leftbox}>
          <Image src={logo} alt="SeLogo" />
          <p>King Mongkut's Institute of Technology Ladkrabang</p>
          <a>
            <Image src={facebook} alt="facebook" />
          </a>
          <a>
            <Image src={instagram} alt="facebook" />
          </a>
          <a>
            <Image src={twitter} alt="facebook" />
          </a>
        </div>
        <div className={styles.rightbox}>
          <p>CONTACT US</p>
          <div className={styles.row}>
            <Image src={location} alt="location" />
            <p>ECC704</p>
          </div>
          <div className={styles.row}>
            <Image src={phone} alt="phone" />
            <p>000-1111111</p>
          </div>
          <div className={styles.row}>
            <Image src={email} alt="email" />
            <p>se@email.com</p>
          </div>
        </div>
      </div>
      <p>
        © 2022 INTERNATIONAL COLLEGE, KING MONGKUT'S INSTITUTE OF TECHNOLOGY
        LADKRABANG
      </p>
    </div>
  );
}
