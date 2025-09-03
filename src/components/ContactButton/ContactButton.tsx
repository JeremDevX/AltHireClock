"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactButton.module.css";
import Altcha from "./Altcha";

export default function ContactButton() {
  const [toggleForm, setToggleForm] = useState(false);
  const [nameFilled, setNameFilled] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [messageFilled, setMessageFilled] = useState(false);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const altchaRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const captchaValue = altchaRef.current?.value;
    if (!captchaValue) {
      alert("Veuillez compléter le captcha");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/send", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Envoi échoué");
      form.reset();
      setToggleForm(false);
      alert("Message envoyé ✅");
    } catch (err) {
      const error = err as Error;
      alert(error?.message ?? "Erreur lors de l’envoi");
    }
  }

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

  useEffect(() => {
    if (!toggleForm) {
      setNameFilled(false);
      setEmailFilled(false);
      setMessageFilled(false);
      setCaptchaSolved(false);
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
        ► Votre futur alternant dès septembre ! ◄
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
                onChange={(e) => setNameFilled(!!e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmailFilled(!!e.target.value)}
              />
              <textarea
                name="message"
                placeholder="Message (max 2000 caractères)"
                required
                maxLength={2000}
                onChange={(e) => setMessageFilled(!!e.target.value)}
              />
              <Altcha
                ref={altchaRef}
                onStateChange={(ev) => {
                  const detail = (ev as CustomEvent).detail;
                  setCaptchaSolved(detail.state === "verified");
                }}
              />
              <button
                type="submit"
                className={styles.submit}
                disabled={
                  !captchaSolved ||
                  !nameFilled ||
                  !emailFilled ||
                  !messageFilled
                }
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
