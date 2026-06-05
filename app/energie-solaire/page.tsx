import Link from "next/link";

const benefits = [
  {
    icon: "💰",
    title: "Réduction de facture",
    text: "Diminuez vos dépenses d’électricité grâce à une installation solaire adaptée à votre consommation.",
  },
  {
    icon: "⚡",
    title: "Autonomie énergétique",
    text: "Produisez votre propre énergie et réduisez votre dépendance au réseau électrique.",
  },
  {
    icon: "🏠",
    title: "Valorisation du bien",
    text: "Une installation photovoltaïque améliore la valeur et l’efficacité énergétique de votre propriété.",
  },
  {
    icon: "🌱",
    title: "Énergie propre",
    text: "Utilisez une énergie renouvelable et réduisez votre impact environnemental.",
  },
];

const solutions = [
  {
    title: "Villas & maisons",
    text: "Solutions solaires pour réduire la facture électrique des habitations.",
  },
  {
    title: "Entreprises",
    text: "Optimisation des coûts énergétiques pour bureaux, commerces et locaux professionnels.",
  },
  {
    title: "Industries",
    text: "Installations adaptées aux besoins de forte consommation électrique.",
  },
  {
    title: "Agriculture",
    text: "Pompage solaire, irrigation et alimentation des exploitations agricoles.",
  },
];

const steps = [
  "Prise de contact",
  "Étude technique gratuite",
  "Proposition commerciale",
  "Installation & mise en service",
  "Maintenance & suivi",
];

export default function EnergieSolairePage() {
  return (
    <main className="min-h-screen bg-[#fffaf0] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 px-6 py-24 text-center text-white">
        <Link
          href="/"
          className="absolute left-8 top-8 rounded-lg border border-yellow-400/40 px-5 py-3 text-yellow-200 hover:bg-yellow-400/10"
        >
          ← Retour au site principal
        </Link>

        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex justify-center">
            <span className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-orange-900">
              ☀️ ÉNERGIE SOLAIRE AU MAROC
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-7xl">
            Réduisez votre facture d’électricité grâce au
            <br />
            <span className="text-yellow-300">
              solaire photovoltaïque
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-relaxed text-orange-50 md:text-2xl">
            Installation de panneaux solaires pour villas, entreprises,
            industries et exploitations agricoles. Étude gratuite, matériel
            certifié, garantie constructeur et accompagnement complet.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Étude gratuite", "Devis rapide", "Installation clé en main", "Garantie & SAV"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-5 py-3 font-semibold text-yellow-100"
                >
                  ✓ {item}
                </span>
              )
            )}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact-solaire"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-orange-950 shadow-xl hover:bg-yellow-300"
            >
              Demander une étude gratuite
            </a>

            <a
              href="#solutions-solaires"
              className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white hover:bg-white/10"
            >
              Voir nos solutions
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold">
            Pourquoi passer au solaire ?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-2xl bg-[#fffaf0] p-8 shadow">
                <div className="mb-5 text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions-solaires" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-extrabold">
            Des solutions adaptées à chaque besoin
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {solutions.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-700">{item.title}</h3>
                <p className="mt-4 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold">Pourquoi choisir DIGIBOT ?</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {[
              "Étude personnalisée",
              "Équipements certifiés",
              "Installation professionnelle",
              "Garantie & SAV",
              "Accompagnement complet",
            ].map((item) => (
              <div key={item} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="mb-4 text-3xl">☀️</div>
                <h3 className="font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold">
            Comment se déroule votre projet ?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-orange-950">
                  {index + 1}
                </div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-solaire" className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-5xl">☀️</div>
          <h2 className="text-4xl font-extrabold">
            Recevez votre estimation solaire gratuite
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Complétez le formulaire ci-dessous et recevez une étude adaptée à
            votre consommation.
          </p>

          <form className="mt-12 rounded-2xl bg-white p-8 text-left shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="font-bold">Type de projet</label>
                <select className="mt-2 w-full rounded-lg border p-4">
                  <option>Villa</option>
                  <option>Entreprise</option>
                  <option>Industrie</option>
                  <option>Agriculture</option>
                </select>
              </div>

              <div>
                <label className="font-bold">Facture mensuelle (MAD)</label>
                <input
                  className="mt-2 w-full rounded-lg border p-4"
                  placeholder="ex: 2500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="font-bold">Téléphone *</label>
              <input
                className="mt-2 w-full rounded-lg border p-4"
                placeholder="ex: +212 661 444 844"
              />
            </div>

            <div className="mt-6">
              <label className="font-bold">Nom</label>
              <input
                className="mt-2 w-full rounded-lg border p-4"
                placeholder="Votre nom"
              />
            </div>

            <Link
              href="https://wa.me/212661444844"
              target="_blank"
              className="mt-8 block rounded-lg bg-green-500 py-4 text-center text-xl font-bold text-white shadow-lg hover:bg-green-600"
            >
              Envoyer via WhatsApp
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}