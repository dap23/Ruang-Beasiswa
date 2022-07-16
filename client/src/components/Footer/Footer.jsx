import React from "react";
import styles from "./footer.module.scss";
import { FiSend } from "react-icons/fi";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Ruang Beasiswa</h1>
        <div className={styles.form}>
          <input type="email" placeholder="Email..." />
          <button>
            <FiSend />
          </button>
        </div>
        <div className={styles.socials}>
          <AiFillGithub />
          <AiFillDribbbleCircle />
          <AiFillFacebook />
          <AiFillLinkedin />
        </div>
      </div>
      <div className={styles.right}>
        <ul>
          <h3>Company</h3>
          <li>About</li>
          <li>Term</li>
          <li>Privacy</li>
        </ul>
        <ul>
          <h3>Service</h3>
          <li>Account</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <h3>Partner</h3>
          <li>Be Out Partner</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
