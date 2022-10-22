import React from "react";
import Link from "next/Link";
import Image from "next/image";
import logo from "../public/SElogo.svg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="SeLogo"></Image>
          </Link>
        </div>
        <ul className={styles.navMenu}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/program">Program</Link>
          </li>
          <li>
            <Link href="/admission">Admission</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/event">Event</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
