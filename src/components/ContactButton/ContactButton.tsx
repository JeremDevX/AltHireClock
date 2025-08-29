"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactButton.module.css";

interface ContactButtonProps {
  // Add props here if needed
}

export default function ContactButton({}: ContactButtonProps) {
  const [toggleForm, setToggleForm] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Envoi échoué");
      form.reset();
      setToggleForm(false);
      alert("Message envoyé ✅");
    } catch (err: any) {
      alert(err?.message ?? "Erreur lors de l’envoi");
    }
  }

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setToggleForm(false);
    }
    if (toggleForm) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggleForm]);

  useEffect(() => {
    if (toggleForm) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 0);
    }
  }, [toggleForm]);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setToggleForm(true)}
        aria-haspopup="dialog"
        aria-expanded={toggleForm}
      >
        Votre futur alternant dès septembre !
      </button>

      {toggleForm && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={() => setToggleForm(false)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label="Contactez moi"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setToggleForm(false)}
              aria-label="Fermer"
            >
              ×
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                ref={firstInputRef}
                type="text"
                name="name"
                placeholder="Nom et Prénom"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required />
              <button type="submit" className={styles.submit}>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
