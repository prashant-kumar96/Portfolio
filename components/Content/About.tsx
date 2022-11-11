import React from "react";
import styles from "./About.module.css";

interface props {
  isToggleActive: boolean;
}
const About: React.FC<props> = ({ isToggleActive }) => {
  return (
    <div className="">
      <div className={styles.imageDiv}>
        <img
          src={isToggleActive ? "/assets/mountain.jpg" : "/assets/hills.jpg"}
          alt=""
          className={styles.image}
        />
        <div
          className={
            isToggleActive ? styles.aboutmetextblack : styles.aboutmetext
          }
        >
          Welcome to my Portfolio Website.
        </div>
      </div>

      <div
        className={isToggleActive ? styles.secondDivtoggle : styles.secondDiv}
      >
        <div className={styles.profilePhoto}>
          <img
            src="/assets/formal photo.jpeg"
            alt=""
            className={styles.formalPhoto}
          />
        </div>
        <div className={styles.content}>
          <p>Greetings of the Day.</p>
          <p>
            My Name is Prashant Kumar and I have done my mca from Invertis
            University Bareilly.
          </p>
          <p>I have knowledge of HTML, CSS, Javascript, reactJs, NextJs.</p>
          <p>Have six Months Experience as a ReactJS developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
