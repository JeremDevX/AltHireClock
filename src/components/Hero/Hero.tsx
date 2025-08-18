"use client";

import styles from "./Hero.module.css";

interface HeroProps {
  //Add props here
}

export default function Hero({}: HeroProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AltHireClock</h1>
      <h2 className={styles.subtitle}>The countdown to my next alternance</h2>
    </div>
  );
}
