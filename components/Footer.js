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
    <div className={styles.footerbackground}>
      <div className={styles.footerbox}>
        <div className={styles.footerinfo}>
          <div className={styles.leftbox}>
            <div className={styles.box}>
              <div className={styles.logo}>
                <Image src={logo} alt="SeLogo" />
              </div>
              <p className={styles.footerP}>
                King Mongkut's Institute of Technology Ladkrabang
              </p>
              <div className={styles.iconlink}>
                <a className={styles.link}>
                  <Image src={facebook} alt="facebook" />
                </a>
                <a className={styles.link}>
                  <Image src={instagram} alt="facebook" />
                </a>
                <a className={styles.link}>
                  <Image src={twitter} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightbox}>
            <div className={styles.box}>
              <p className={styles.contactP}>CONTACT US</p>
              <div className={styles.row}>
                <Image src={location} alt="location" />
                <p className={styles.contactinfoP}>ECC704</p>
              </div>
              <div className={styles.row}>
                <Image src={phone} alt="phone" />
                <p className={styles.contactinfoP}>000-1111111</p>
              </div>
              <div className={styles.row}>
                <Image src={email} alt="email" />
                <p className={styles.contactinfoP}>se@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.footerP}>
          © 2022 INTERNATIONAL COLLEGE, KING MONGKUT'S INSTITUTE OF TECHNOLOGY
          LADKRABANG
        </p>
      </div>
    </div>
  );
}
