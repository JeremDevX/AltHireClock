"use client";

import { BsFillMortarboardFill } from "react-icons/bs";
import styles from "./ProfileModal.module.css";
import { FaChartPie, FaSuitcase } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface ProfileModalProps {}

type CardType = {
  key: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
};

export default function ProfileModal({}: ProfileModalProps) {
  const cards: CardType[] = [
    {
      key: "skills",
      icon: <FaChartPie />,
      title: "Compétences",
      content: (
        <div className={styles.sectionList}>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Tech Skills</strong>
            </div>
            <div className={styles.itemDesc}>
              <ul className={styles.itemBullets}>
                <li>
                  Front End : React, Next.js, TypeScript, JavaScript, Tailwind,
                  Redux, HTML, CSS/SCSS, Zod
                </li>
                <li>Back End : Node.js, Prisma, SQL</li>
                <li>CMS / Headless : Sanity, Strapi</li>
                <li>
                  Méthodologies : Accessibilité (WCAG), SEO, Responsive design,
                  APIs REST/GraphQL
                </li>
                <li>
                  Outils : Git/GitHub, VSCode, Vercel, Figma,
                  Photoshop/Illustrator (bases)
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Soft Skills</strong>
            </div>
            <div className={styles.itemDesc}>
              <ul className={styles.itemBullets}>
                <li>Leadership & travail d’équipe</li>
                <li>Autonomie et rigueur</li>
                <li>Résolution de problèmes complexes</li>
                <li>Adaptabilité et montée en compétence rapide</li>
              </ul>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Langues</strong>
            </div>
            <div className={styles.itemDesc}>
              <ul className={styles.itemBullets}>
                <li>Français (Natif)</li>
                <li>Anglais (B2-C1)</li>
              </ul>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Autres</strong>
            </div>
            <div className={styles.itemDesc}>
              <ul className={styles.itemBullets}>
                <li>Permis B</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "exp",
      icon: <FaSuitcase />,
      title: "Expérience",
      content: (
        <div className={styles.sectionList}>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Développeur web</strong>
              <span className={styles.itemDates}>2023 - 2025</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>
                Projets académiques & prototypes
              </div>
              <ul className={styles.itemBullets}>
                <li>
                  Conception et déploiement d’applications web modernes
                  (React/Next.js, TypeScript, Tailwind)
                </li>
                <li>
                  Réalisations : Portfolio dynamique (API GitHub + Framer
                  Motion), CV interactif “AltHireClock”, mini-apps (Pomodoro
                  Timer, Password Generator, GitHub Search, BMI Calculator),
                  blog technique (Next.js + Sanity), jeux web (React & JS
                  Vanilla)
                </li>
                <li>
                  Mise en œuvre de bonnes pratiques : accessibilité, SEO
                  (Lighthouse/Wave), responsive design, CI/CD
                </li>
                <li>
                  Premiers pas back-end : Node.js, Prisma, SQL, APIs
                  REST/GraphQL
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>XRVAP</strong>
              <span className={styles.itemDates}>2025</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>Commercial itinérant</div>
              <ul className={styles.itemBullets}>
                <li>Vente B2C d’équipements techniques</li>
                <li>
                  Démonstrations, pédagogie client, montage dossiers de
                  financement
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Mont Blanc Autos</strong>
              <span className={styles.itemDates}>2014 - 2023</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>
                Technicien puis Chef d’équipe
              </div>
              <ul className={styles.itemBullets}>
                <li>
                  Supervision d’une équipe de 3 techniciens (Mazda & Mitsubishi)
                </li>
                <li>
                  Référent diagnostics complexes (thermique, hybride,
                  électrique)
                </li>
                <li>
                  Gestion complète de la relation client et des garanties
                  constructeur
                </li>
                <li>
                  Organisation planning, contrôle qualité, remplacement chef
                  d’atelier
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "studies",
      icon: <BsFillMortarboardFill />,
      title: "Formations",
      content: (
        <div className={styles.eduList}>
          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <strong className={styles.eduSchool}>
                MyDigitalSchool Grenoble
              </strong>
              <span className={styles.eduDates}>2025 - 2027 (en cours)</span>
            </div>
            <div className={styles.eduDegree}>MBA Développeur Fullstack</div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <strong className={styles.eduSchool}>OpenClassrooms</strong>
              <span className={styles.eduDates}> 2023 - 2024</span>
            </div>
            <div className={styles.eduDegree}>Intégrateur Web - Titre RNCP</div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <strong className={styles.eduSchool}>ECAUT</strong>
              <span className={styles.eduDates}>2011 - 2014</span>
            </div>
            <div className={styles.eduDegree}>
              BAC Pro Maintenance des Véhicules Automobiles
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  const openModal = (card: CardType) => setActiveCard(card);
  const closeModal = () => setActiveCard(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (activeCard) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeCard]);

  return (
    <>
      <div className={styles.container}>
        {cards.map((card) => (
          <Card
            key={card.key}
            icon={card.icon}
            title={card.title}
            content={card.content}
            onOpen={() => openModal(card)}
          />
        ))}
      </div>

      {activeCard && (
        <div className={styles.overlay} onClick={closeModal}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={(e) => e.stopPropagation()}
          >
            <header className={styles.modalHeader}>
              <h3 id="modal-title">{activeCard.title}</h3>
              <button
                type="button"
                className={styles.close}
                onClick={closeModal}
                aria-label="Fermer la modale"
              >
                ×
              </button>
            </header>
            <div className={styles.modalContent} id="modal-desc">
              {activeCard.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Card({
  title,
  icon,
  content,
  onOpen,
}: {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className={styles.card}
      onClick={onOpen}
      aria-expanded={false}
    >
      <div>{icon}</div>
      <h2>{title}</h2>
    </button>
  );
}
