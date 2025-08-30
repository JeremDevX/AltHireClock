"use client";

import styles from "./Footer.module.css";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brand}>Jérémie Lavergnat</div>
          <div className={styles.tag}>Étudiant développeur fullstack</div>
        </div>

        <div className={styles.center}>
          <nav className={styles.social} aria-label="Réseaux sociaux">
            <a
              href="https://www.linkedin.com/in/jeremie-lavergnat/"
              aria-label="LinkedIn"
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JeremDevX"
              aria-label="GitHub"
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://jeremdevx.com/fr"
              aria-label="Portfolio"
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe />
            </a>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.copy}>
            <p> Tous droits réservés</p>© {new Date().getFullYear()} Jérémie
            Lavergnat
          </div>
        </div>
      </div>
    </footer>
  );
}
