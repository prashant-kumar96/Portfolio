import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

interface props {
  isToggleActive: boolean;
  setIsToggleActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<props> = ({ isToggleActive, setIsToggleActive }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    console.log(navbar, "navbar");
  });

  return (
    <div>
      <div className={navbar ? styles.headerwhite : styles.header}>
        <div className={styles.container}>
          <div className={styles.companyLogoDiv}>
            <h2>Prashant Kumar</h2>
          </div>

          <div className={styles.linkDiv}>
            <Link href="#">
              <div className={styles.link}>ABOUT</div>
            </Link>
            <Link href="#">
              <div className={styles.link}>PROJECTS</div>
            </Link>
            <Link href="#">
              <div className={styles.link}>CONTACT</div>
            </Link>
          </div>

          <div className={styles.changeLayout}>
            <label className={styles.slider}>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => {
                  setIsToggleActive(!isToggleActive);
                  console.log("isToggleActive: " + isToggleActive);
                }}
              />

              <span className={styles.switch}></span>
              <p className={styles.tooltip}>
                Click here to toggle website color
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
