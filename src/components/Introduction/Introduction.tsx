"use client";

import { IoIosRocket } from "react-icons/io";
import styles from "./Introduction.module.css";
import { FaBookOpenReader } from "react-icons/fa6";
import { CgToolbox } from "react-icons/cg";
import { SiFusionauth } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";
import { BsHourglass } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import Image from "next/image";

interface IntroductionProps {
  //Add props here
}

export default function Introduction({}: IntroductionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.avatar}>
          <div className={styles.image}>
            <Image src="/avatar.png" alt="Avatar" fill />
          </div>
          <div className={styles.highlights}>
            <ul className={styles.list}>
              <li role="listitem" tabIndex={0} aria-label="Rigoureux">
                <FaBookOpenReader />
                Rigoureux
              </li>
              <li role="listitem" tabIndex={0} aria-label="Autonome">
                <CgToolbox />
                Autonome
              </li>
              <li
                role="listitem"
                tabIndex={0}
                aria-label="Capacité d'adaptation"
              >
                <SiFusionauth />
                Capacité d'adaptation
              </li>
              <li
                role="listitem"
                tabIndex={0}
                aria-label="En route vers le fullstack"
              >
                <IoIosRocket /> En route vers le fullstack
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2>Qui suis-je ?</h2>
          <p className={styles.description}>
            Je suis <strong>Jérémie Lavergnat</strong>, ancien chef d’équipe
            automobile devenu passionné de <strong>développement web</strong>.
            Pendant dix ans, j’ai appris à{" "}
            <strong>gérer des responsabilités</strong>, à{" "}
            <strong>travailler en équipe</strong> et à rester{" "}
            <strong>rigoureux</strong> sous pression.
            <br />
            <br />
            Aujourd’hui, j’ai choisi de mettre cette expérience au service d’un
            nouveau défi: <strong>l’informatique</strong> et le{" "}
            <strong>web</strong>.
            <br />
            <br />
            J’étudie actuellement à <strong>
              MyDigitalSchool Grenoble
            </strong>{" "}
            pour valider mon
            <strong> Bac+3 Concepteur Développeur d’Applications</strong>, avec
            l’objectif clair de poursuivre jusqu’au
            <strong> Bac+5 MBA Fullstack</strong>.
            <br />
            <br />
            J’ai déjà une solide base en <strong>front-end</strong>, et je
            développe de plus en plus mes compétences en
            <strong> back-end</strong> afin de devenir un développeur{" "}
            <strong>complet</strong>.
            <br />
            <br />
            Pour moi, cette alternance n’est pas juste un passage : c’est une{" "}
            <strong>étape clé</strong>. Je veux rejoindre une entreprise prête à
            me faire confiance et lui apporter en retour : mon{" "}
            <strong>énergie</strong>, ma <strong>motivation</strong> et ma
            capacité à <strong>apprendre vite</strong>.
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <TbTargetArrow />
          <h3 className={styles.strong}>1 but</h3>
          <p className={styles.text}>Devenir fullstack</p>
        </div>
        <div className={styles.stat}>
          <BsHourglass />
          <h3 className={styles.strong}>10 ans</h3>
          <p className={styles.text}>D'expérience pro</p>
        </div>
        <div className={styles.stat}>
          <AiFillFire />
          <h3 className={styles.strong}>100 %</h3>
          <p className={styles.text}>Motivé pour une alternance</p>
        </div>
      </div>
    </div>
  );
}
