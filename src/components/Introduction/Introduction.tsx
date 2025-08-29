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
                <IoIosRocket /> En route vers le Fullstack
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2>Qui suis-je ?</h2>
          <p className={styles.description}>
            Je suis <strong>Jérémie Lavergnat</strong>, ancien chef d’équipe
            automobile avec 10 ans d’expérience en management, diagnostic
            technique et relation client.
            <br />
            <br />
            Aujourd’hui, je mets cette rigueur et cette capacité à résoudre des
            problèmes complexes au service d’un nouveau défi:{" "}
            <strong>l’informatique</strong> et le <strong>web</strong>.
            <br />
            <br />
            Sélectionné directement en{" "}
            <strong>MBA Développeur Fullstack</strong> à MyDigitalSchool
            Grenoble, je développe des compétences solides en{" "}
            <strong>front-end</strong> (React/Next.js, TypeScript, Tailwind) et
            en <strong>back-end</strong> (Node.js, Prisma, SQL, APIs
            REST/GraphQL) pour devenir un développeur complet.
            <br />
            <br />
            Cette alternance n’est pas seulement un passage obligatoire, mais
            une <strong>étape clé</strong> de mon parcours. Je veux rejoindre
            une entreprise qui me fera confiance, et à laquelle j’apporterai en
            retour : mon <strong>énergie</strong>, ma{" "}
            <strong>motivation</strong> et ma capacité à{" "}
            <strong>apprendre vite</strong>.
          </p>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <TbTargetArrow />
          <h3 className={styles.strong}>1 but</h3>
          <p className={styles.text}>Devenir Fullstack</p>
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
