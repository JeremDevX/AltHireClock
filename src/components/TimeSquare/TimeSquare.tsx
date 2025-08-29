"use client";

import styles from "./TimeSquare.module.css";
import { useEffect, useState } from "react";

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
  const deadline = new Date("2025-09-15T00:00:00Z").getTime();
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0);
    const minutes = Math.max(Math.floor((distance / (1000 * 60)) % 60), 0);
    const seconds = Math.max(Math.floor((distance / 1000) % 60), 0);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const value = days
    ? timeLeft.days
    : hours
    ? timeLeft.hours
    : minutes
    ? timeLeft.minutes
    : seconds
    ? timeLeft.seconds
    : 0;
  return (
    <div className={styles.container}>
      <div className={styles.timeUnit}>
        <p className={styles.timeValue}>{value}</p>
      </div>
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
