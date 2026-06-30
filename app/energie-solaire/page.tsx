import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation panneaux solaires au Maroc — Devis gratuit",
  description:
    "Installation de panneaux solaires et solutions d'autoconsommation au Maroc : audit de consommation, dimensionnement, pose sécurisée et suivi après installation. Devis gratuit avec DIGIBOT.",
};

const packs = [
  ["Résidentiel", "Maisons, villas et appartements avec consommation régulière."],
  ["Professionnel", "Bureaux, commerces, ateliers et locaux techniques."],
  ["Sites isolés", "Solutions avec batteries pour zones sans alimentation stable."],
];

const method = [
  "Audit de consommation",
  "Dimensionnement technique",
  "Installation sécurisée",
  "Suivi & maintenance",
];

export default function EnergieSolairePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-white/10"
          >
            ← Retour au site principal
          </Link>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                DIGIBOT Solar Solutions
              </p>

              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Une énergie plus intelligente pour votre maison ou votre activité
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Nous concevons des installations solaires propres, fiables et
                adaptées à votre consommation : étude, matériel, pose, protection
                électrique et suivi après installation.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#devis"
                  className="rounded-full bg-white px-8 py-4 font-bold text-blue-950 hover:bg-cyan-100"
                >
                  Demander une étude
                </a>

                <a
                  href="#methode"
                  className="rounded-full border border-cyan-300/50 px-8 py-4 font-bold text-cyan-100 hover:bg-cyan-300/10"
                >
                  Notre méthode
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-white p-6 text-slate-900 shadow-2xl">
              <div className="rounded-[1.5rem] bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-blue-950">
                    Audit DIGIBOT
                  </span>
                  <span className="text-4xl">☀️</span>
                </div>

                <h2 className="mt-8 text-2xl font-black text-blue-950">
                  Votre projet commence par une vraie étude
                </h2>

                <div className="mt-6 space-y-3">
                  {[
                    "Consommation électrique",
                    "Surface disponible",
                    "Objectif d’économie",
                    "Budget et priorité",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="methode" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-blue-950">
              La méthode DIGIBOT
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {method.map((item, index) => (
                <div key={item} className="rounded-3xl bg-slate-50 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-blue-950">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {packs.map(([title, text]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                ⚡
              </div>
              <h3 className="text-2xl font-black text-blue-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="devis" className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">
              Contact solaire
            </p>

            <h2 className="mt-4 text-4xl font-black text-blue-950">
              Recevez une première estimation
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Envoyez-nous les informations de base. Nous vous répondons avec une
              orientation claire pour votre projet solaire.
            </p>
          </div>

          <form className="rounded-[2rem] bg-slate-50 p-8 shadow-sm">
            <input className="mb-4 w-full rounded-2xl border p-4" placeholder="Nom complet" />
            <input className="mb-4 w-full rounded-2xl border p-4" placeholder="Téléphone" />
            <select className="mb-4 w-full rounded-2xl border p-4">
              <option>Résidentiel</option>
              <option>Professionnel</option>
              <option>Site isolé</option>
            </select>
            <input className="mb-6 w-full rounded-2xl border p-4" placeholder="Facture mensuelle approximative" />

            <Link
              href="https://wa.me/212660604614"
              target="_blank"
              className="block rounded-2xl bg-blue-950 py-4 text-center text-lg font-bold text-white hover:bg-blue-900"
            >
              Envoyer via WhatsApp
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}