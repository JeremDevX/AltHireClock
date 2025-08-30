"use client";

import styles from "./AnalyticsWidget.module.css";
import { useEffect, useMemo, useState } from "react";
import { FiBarChart2, FiX } from "react-icons/fi";

interface AnalyticsWidgetProps {
  views: number;
  os: { os: string; total: number }[];
  browser: { browser: string; total: number }[];
  uniqueVisitor: number;
}

export default function AnalyticsWidget({
  views,
  os,
  browser,
  uniqueVisitor,
}: AnalyticsWidgetProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const osTotal = useMemo(() => os.reduce((s, i) => s + i.total, 0), [os]);
  const browserTotal = useMemo(
    () => browser.reduce((s, i) => s + i.total, 0),
    [browser]
  );

  return (
    <>
      <button
        aria-haspopup="dialog"
        aria-expanded={open}
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        title="Statistiques"
      >
        <FiBarChart2 size={18} />
        <span className={styles.fabLabel}>Statistiques</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <header className={styles.modalHeader}>
              <h2>Statistiques</h2>
              <button
                aria-label="Fermer"
                className={styles.closeButton}
                onClick={() => setOpen(false)}
              >
                <FiX size={18} />
              </button>
            </header>

            <section className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Vues totales</div>
                <div className={styles.metricValue}>{views}</div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Visiteurs uniques</div>
                <div className={styles.metricValue}>{uniqueVisitor}</div>
              </div>
            </section>

            <section className={styles.distribution}>
              <h3>Distribution des OS</h3>
              <div className={styles.list}>
                {os.map((item) => {
                  const pct = osTotal
                    ? Math.round((item.total / osTotal) * 100)
                    : 0;
                  return (
                    <div className={styles.row} key={item.os}>
                      <div className={styles.rowLabel}>
                        {item.os}{" "}
                        <span className={styles.rowCount}>{item.total}</span>
                      </div>
                      <div className={styles.barTrack} aria-hidden>
                        <div
                          className={styles.barFill}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className={styles.pct}>{pct}%</div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className={styles.distribution}>
              <h3>Distribution des navigateurs</h3>
              <div className={styles.list}>
                {browser.map((item) => {
                  const pct = browserTotal
                    ? Math.round((item.total / browserTotal) * 100)
                    : 0;
                  return (
                    <div className={styles.row} key={item.browser}>
                      <div className={styles.rowLabel}>
                        {item.browser}{" "}
                        <span className={styles.rowCount}>{item.total}</span>
                      </div>
                      <div className={styles.barTrack} aria-hidden>
                        <div
                          className={styles.barFill}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className={styles.pct}>{pct}%</div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
