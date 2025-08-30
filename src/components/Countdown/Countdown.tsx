"use client";

import TimeSquare from "../TimeSquare/TimeSquare";
import styles from "./Countdown.module.css";

export default function Countdown() {
  return (
    <div className={styles.container}>
      <TimeSquare days />
      <TimeSquare hours />
      <TimeSquare minutes />
      <TimeSquare seconds />
    </div>
  );
}
