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
                  Front End : HTML, CSS / SCSS, Javascript / Typescript,
                  Tailwind, React, Redux, Next.js
                </li>
                <li>Back End : Node.js, Prisma</li>
                <li>Gestion de contenu : Sanity, Strapi</li>
                <li>
                  Environnement : VSCode, Git, GitHub, Vercel, Figma, Photoshop
                  (bases), Illustrator (bases)
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
                <li>Autonomie</li>
                <li>Travail d’équipe</li>
                <li>Adaptabilité</li>
                <li>Résolution de problème</li>
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
                <li>Allemand (Basique)</li>
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
              <strong className={styles.itemTitle}>XRVAP</strong>
              <span className={styles.itemDates}>Avr 2025 - Juil 2025</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>Commercial itinérant</div>
              <ul className={styles.itemBullets}>
                <li>
                  Vente d’appareil de nettoyage pour le particulier à domicile
                </li>
                <li>Démonstration et explications techniques de l’appareil</li>
                <li>Montage de dossiers de financement</li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>Projets personnel</strong>
              <span className={styles.itemDates}>Sep 2024 - Avr 2025</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>Développement de compétences</div>
              <ul className={styles.itemBullets}>
                <li>
                  Apprentissage continu et perfectionnement des technologies
                  front-end (Framework, Préprocesseurs CSS, Headless CMS, etc.)
                </li>
                <li>
                  Mise en oeuvre des bonnes pratiques d’accessibilité,
                  responsive design, SEO et optimisation (WCAG, Lighthouse,
                  Wave, Speed Insights)
                </li>
                <li>Exploration CSR / SSR / ISR</li>
                <li>
                  Veille technologique et formations (serverless, API
                  Rest/GraphQL)
                </li>
                <li>
                  Réalisation d’un site web combinant blog et outils interactifs
                  (Next.js + Sanity)
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionItem}>
            <div className={styles.itemHeader}>
              <strong className={styles.itemTitle}>MONT BLANC AUTOS</strong>
              <span className={styles.itemDates}>Nov 2014 - Sep 2023</span>
            </div>
            <div className={styles.itemDesc}>
              <div className={styles.itemSub}>Technicien / Chef d’équipe</div>
              <ul className={styles.itemBullets}>
                <li>
                  Chef d’équipe et technicien principal chez Mazda et Mitsubishi
                </li>
                <li>
                  Expertise en diagnostic et habilitation de travail sur
                  véhicules hybrides et électriques (hors et sous tension)
                </li>
                <li>
                  Gestion clientèle complète (prise de RDV, réception, devis,
                  facturation, restitution)
                </li>
                <li>
                  Gestion des dossiers de garanties constructeurs et demandes
                  d’accommodement
                </li>
                <li>
                  Supervision de l’équipe, gestion du planning et contrôle
                  qualité
                </li>
                <li>Remplacement du chef d’atelier en son absence</li>
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
                MYDIGITALSCHOOL Grenoble
              </strong>
              <span className={styles.eduDates}>2025 - 2026 (en cours)</span>
            </div>
            <div className={styles.eduDegree}>
              Titre Concepteur Développeur d'Applications
            </div>
          </div>

          <div className={styles.eduItem}>
            <div className={styles.eduHeader}>
              <strong className={styles.eduSchool}>OPENCLASSROOMS</strong>
              <span className={styles.eduDates}>Déc 2023 - Sep 2024</span>
            </div>
            <div className={styles.eduDegree}>
              Intégrateur Web (RNCP 5 équivalent BTS)
            </div>
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
