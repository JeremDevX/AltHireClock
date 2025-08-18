"use client";

import styles from "./TimeSquare.module.css";

interface TimeSquareProps {
  days?: boolean;
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
}

export default function TimeSquare({
  days,
  hours,
  minutes,
  seconds,
}: TimeSquareProps) {
  return (
    <div className={styles.container}>
      <div className={styles.timeUnit}>00</div>
      <div className={styles.timeLabel}>
        <h3>
          {days
            ? "Days"
            : hours
            ? "Hours"
            : minutes
            ? "Minutes"
            : seconds
            ? "Seconds"
            : null}
        </h3>
      </div>
    </div>
  );
}
