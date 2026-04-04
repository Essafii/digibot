"use client";

import { useState, type FormEvent } from "react";

import { COMPANY_CONTACT } from "@/constants/contact";
import {
  fieldHintClassName,
  inputClassName,
  labelClassName,
} from "@/components/ui/form-styles";

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Merci de remplir au moins le nom, l’e-mail et le message.");
      return;
    }

    const body = [
      `Message envoyé depuis le site DIGIBOT`,
      ``,
      `Nom : ${name}`,
      `E-mail : ${email}`,
      ``,
      message,
    ].join("\n");

    const mailto = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
      subject || `Contact — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-100 bg-white p-6 shadow-lg shadow-brand-900/[0.04] sm:p-8"
      noValidate
    >
      <h2 className="text-lg font-bold text-brand-950">Écrivez-nous</h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
        Nous vous répondons sous 1 à 2 jours ouvrés. Les champs marqués d’une
        astérisque sont obligatoires.
      </p>

      <div className="mt-8 space-y-5">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Nom complet <span className="text-brand-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClassName}
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            E-mail <span className="text-brand-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClassName}
            placeholder="digibot.contact@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className={labelClassName}>
            Sujet
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            className={inputClassName}
            placeholder="Demande d’information, projet…"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClassName}>
            Message <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className={inputClassName}
            placeholder="Décrivez votre besoin, vos délais, votre contexte…"
          />
        </div>
      </div>

      {error ? (
        <p
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <p className={fieldHintClassName}>
        En envoyant ce formulaire, votre messagerie s’ouvre avec un message
        prérempli vers {COMPANY_CONTACT.email}. Vous pouvez l’ajuster avant
        l’envoi.
      </p>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/20 sm:w-auto"
      >
        Ouvrir l’e-mail
      </button>
    </form>
  );
}
