"use client";

import { useState, type FormEvent } from "react";

import { COMPANY_CONTACT } from "@/constants/contact";
import {
  fieldHintClassName,
  inputClassName,
  labelClassName,
} from "@/components/ui/form-styles";

const serviceOptions = [
  { value: "", label: "Sélectionnez un domaine" },
  { value: "security", label: "Sécurité & caméras" },
  { value: "network", label: "Réseaux & informatique" },
  { value: "web", label: "Web & logiciels" },
  { value: "marketing", label: "Marketing & publicité" },
  { value: "other", label: "Autre / plusieurs besoins" },
] as const;

const budgetOptions = [
  { value: "", label: "Budget indicatif (optionnel)" },
  { value: "under-2k", label: "Moins de 2 000 €" },
  { value: "2k-5k", label: "2 000 € — 5 000 €" },
  { value: "5k-15k", label: "5 000 € — 15 000 €" },
  { value: "15k-plus", label: "Plus de 15 000 €" },
  { value: "unknown", label: "Je ne sais pas encore" },
] as const;

export function QuoteForm() {
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const budget = String(data.get("budget") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Merci de remplir le nom, l’e-mail et la description du projet.");
      return;
    }

    const serviceLabel = service
      ? (serviceOptions.find((o) => o.value === service)?.label ?? service)
      : "Non précisé";
    const budgetLabel = budget
      ? (budgetOptions.find((o) => o.value === budget)?.label ?? budget)
      : "Non précisé";

    const body = [
      `Demande de devis — DIGIBOT`,
      ``,
      `Nom : ${name}`,
      `E-mail : ${email}`,
      phone ? `Téléphone : ${phone}` : null,
      company ? `Société : ${company}` : null,
      `Domaine : ${serviceLabel}`,
      `Budget indicatif : ${budgetLabel}`,
      ``,
      `Description du besoin :`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
      `Devis — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-100 bg-white p-6 shadow-lg shadow-brand-900/[0.04] sm:p-8"
      noValidate
    >
      <h2 className="text-lg font-bold text-brand-950">Votre demande</h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
        Plus vous êtes précis, plus notre proposition sera pertinente. Nous
        revenons vers vous pour affiner le périmètre et planifier un échange.
      </p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className={labelClassName}>
              Nom complet <span className="text-brand-600">*</span>
            </label>
            <input
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="quote-email" className={labelClassName}>
              E-mail <span className="text-brand-600">*</span>
            </label>
            <input
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClassName}
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-phone" className={labelClassName}>
              Téléphone
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="quote-company" className={labelClassName}>
              Société / organisation
            </label>
            <input
              id="quote-company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClassName}
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-service" className={labelClassName}>
              Domaine principal
            </label>
            <select
              id="quote-service"
              name="service"
              className={inputClassName}
              defaultValue=""
            >
              {serviceOptions.map((o) => (
                <option key={o.value || "empty"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quote-budget" className={labelClassName}>
              Budget indicatif
            </label>
            <select
              id="quote-budget"
              name="budget"
              className={inputClassName}
              defaultValue=""
            >
              {budgetOptions.map((o) => (
                <option key={o.value || "empty"} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="quote-message" className={labelClassName}>
            Décrivez votre projet <span className="text-brand-600">*</span>
          </label>
          <textarea
            id="quote-message"
            name="message"
            rows={6}
            className={inputClassName}
            placeholder="Contexte, délais souhaités, contraintes techniques, lieu d’intervention…"
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
        L’envoi ouvre votre messagerie avec un message prérempli. Ce n’est pas
        un envoi automatique depuis nos serveurs.
      </p>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 sm:w-auto"
      >
        Demander un devis gratuit
      </button>
    </form>
  );
}
