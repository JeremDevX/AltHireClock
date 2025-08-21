"use client";

import { IoIosRocket } from "react-icons/io";
import styles from "./Introduction.module.css";
import { FaBookOpenReader } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { SiFusionauth } from "react-icons/si";

interface IntroductionProps {
  //Add props here
}

export default function Introduction({}: IntroductionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.image}></div>
        <div className={styles.highlights}>
          <ul className={styles.list}>
            <li>
              <FaBookOpenReader />
              Rigoureux
            </li>
            <li>
              <CgToolbox />
              Autonome
            </li>
            <li>
              <SiFusionauth />
              Capacité d'adaptation
            </li>
            <li>
              <IoIosRocket /> En route vers le fullstack
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2>Qui suis-je ?</h2>
        <p className={styles.description}>
          Je suis <strong>Jérémie Lavergnat</strong>. Pendant dix ans, j’ai
          travaillé dans la mécanique automobile, en évoluant de technicien à
          chef d’équipe. Ce parcours m’a appris à gérer des{" "}
          <strong>responsabilités</strong>, à{" "}
          <strong>travailler en équipe</strong> et à rester{" "}
          <strong>rigoureux</strong>, même sous pression. <br /> Mais au fil du
          temps, c’est une autre passion qui a pris le dessus : l’informatique
          et le développement web. J’ai donc choisi de me reconvertir et
          j’étudie aujourd’hui à <strong>MyDigitalSchool Grenoble</strong>.
          <br /> Mon objectif est clair : trouver une alternance de 1 à 3 ans
          pour valider mon{" "}
          <strong>Bac+3 Concepteur Développeur d’Applications</strong>, avec
          l’ambition de poursuivre ensuite jusqu’au{" "}
          <strong>Bac +5 MBA Fullstack</strong>. Jusqu’ici, j’ai surtout appris
          le
          <strong> front-end</strong>, mais je m’intéresse de plus en plus au
          <strong> back-end</strong>, car je veux devenir un développeur
          complet. <br />
          Cette alternance est pour moi une étape essentielle : je veux
          rejoindre une entreprise qui me fera confiance, et lui apporter en
          retour mon énergie, ma <strong>motivation</strong> et ma capacité à{" "}
          <strong>apprendre vite</strong>.
        </p>
      </div>
    </div>
  );
}
