"use client";

import styles from "./ContactButton.module.css";

interface ContactButtonProps {
  //Add props here
}

export default function ContactButton({}: ContactButtonProps) {
  return <button className={styles.container}>ContactButton</button>;
}
