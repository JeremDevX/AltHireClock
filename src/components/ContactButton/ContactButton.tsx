"use client";

import styles from "./ContactButton.module.css";

interface ContactButtonProps {
  //Add props here
}

export default function ContactButton({}: ContactButtonProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        Contact Me Before Times Runs Out
      </button>
    </div>
  );
}
