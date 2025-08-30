"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AltHireClock</h1>
      <h2 className={styles.subtitle}>The countdown to my next alternance</h2>
    </div>
  );
}
