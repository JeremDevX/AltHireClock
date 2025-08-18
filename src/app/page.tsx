import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import ContactButton from "@/components/ContactButton/ContactButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <ContactButton />
    </main>
  );
}
