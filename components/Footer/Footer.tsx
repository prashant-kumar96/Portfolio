import React from "react";
import styles from "./Footer.module.css";
interface props {
  isToggleActive: boolean;
}
const Footer: React.FC<props> = ({ isToggleActive }) => {
  return (
    <div className={isToggleActive ? styles.footerreverse : styles.footer}>
      Made By: Trever Philips Industries ;)
    </div>
  );
};

export default Footer;
