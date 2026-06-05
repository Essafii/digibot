import Link from "next/link";

const services = [
  ["Étude énergétique", "Analyse de votre consommation et dimensionnement précis."],
  ["Installation solaire", "Panneaux photovoltaïques, onduleurs, batteries et protections."],
  ["Maintenance & suivi", "Contrôle, optimisation et accompagnement après installation."],
];

export default function EnergieSolairePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-cyan-300/30 px-5 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10"
          >
            ← Retour au site principal
          </Link>

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-bold uppercase tracking-wider text-cyan-300">
                DIGIBOT Énergie Solaire
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
                Des solutions solaires fiables pour réduire vos coûts
                énergétiques
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                DIGIBOT accompagne les particuliers et professionnels dans
                l’étude, l’installation et la maintenance de systèmes solaires
                photovoltaïques au Maroc.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-solaire"
                  className="rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
                >
                  Demander une étude gratuite
                </a>

                <a
                  href="#services"
                  className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10"
                >
                  Voir les services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <div className="text-6xl">☀️</div>
              <h2 className="mt-6 text-2xl font-bold">
                Installation clé en main
              </h2>
              <p className="mt-4 text-slate-300">
                Étude technique, choix du matériel, installation, mise en service
                et suivi après projet.
              </p>

              <div className="mt-6 grid gap-3 text-sm">
                {["Étude personnalisée", "Matériel certifié", "Garantie & SAV"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white/10 px-4 py-3 text-cyan-100"
                    >
                      ✓ {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-extrabold">
            Nos services en énergie solaire
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-2xl text-cyan-300">
                  ☀️
                </div>
                <h3 className="text-2xl font-bold text-blue-950">{title}</h3>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-950 p-10 text-white shadow-xl">
          <h2 className="text-3xl font-extrabold">
            Pour villas, entreprises, commerces et sites professionnels
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Nous proposons des solutions adaptées à votre consommation, à votre
            budget et à vos objectifs d’économie d’énergie.
          </p>
        </div>
      </section>

      <section id="contact-solaire" className="bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-4xl font-extrabold">
            Recevez votre estimation gratuite
          </h2>

          <form className="mt-10 rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-xl">
            <input
              className="mb-4 w-full rounded-xl border p-4"
              placeholder="Nom complet"
            />
            <input
              className="mb-4 w-full rounded-xl border p-4"
              placeholder="Téléphone"
            />
            <select className="mb-4 w-full rounded-xl border p-4">
              <option>Villa / Maison</option>
              <option>Entreprise</option>
              <option>Commerce</option>
              <option>Industrie</option>
              <option>Agriculture</option>
            </select>
            <input
              className="mb-6 w-full rounded-xl border p-4"
              placeholder="Facture mensuelle approximative"
            />

            <Link
              href="https://wa.me/212661444844"
              target="_blank"
              className="block rounded-xl bg-blue-950 py-4 text-center text-lg font-bold text-white hover:bg-blue-900"
            >
              Envoyer la demande via WhatsApp
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}