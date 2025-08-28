"use client";

import { useState } from "react";
import styles from "./ContactButton.module.css";

interface ContactButtonProps {
  //Add props here
}

export default function ContactButton({}: ContactButtonProps) {
  const [toggleForm, setToggleForm] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Envoi échoué");
      form.reset();
      alert("Message envoyé ✅");
    } catch (err: any) {
      alert(err?.message ?? "Erreur lors de l’envoi");
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setToggleForm(!toggleForm)}
      >
        Votre futur alternant dès septembre !
      </button>
      {toggleForm && (
        <form action="/api/send" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Ton nom" required />
          <input type="email" name="email" placeholder="Ton email" required />
          <textarea
            name="message"
            placeholder="Ton message"
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}
