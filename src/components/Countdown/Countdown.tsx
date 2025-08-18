"use client";

import TimeSquare from "../TimeSquare/TimeSquare";
import styles from "./Countdown.module.css";

interface CountdownProps {
  //Add props here
}

export default function Countdown({}: CountdownProps) {
  return (
    <div className={styles.container}>
      <TimeSquare days />
      <TimeSquare hours />
      <TimeSquare minutes />
      <TimeSquare seconds />
    </div>
  );
}
