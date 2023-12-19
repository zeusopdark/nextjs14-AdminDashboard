import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ankit Dev</div>
      <div className={styles.text}>All right reserved.</div>
    </div>
  );
};

export default Footer;
