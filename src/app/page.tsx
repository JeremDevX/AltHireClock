import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Countdown from "@/components/Countdown/Countdown";
import ContactButton from "@/components/ContactButton/ContactButton";
import Introduction from "@/components/Introduction/Introduction";
import ProfileModal from "@/components/ProfileModal/ProfileModal";
import Footer from "@/components/Footer/Footer";
import Analytics from "@/components/Analytics/Analytics";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <ContactButton />
      <Introduction />
      <ProfileModal />
      <Footer />
      <Analytics />
    </main>
  );
}
