import Link from "next/link";

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

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <span className="rounded-full bg-yellow-400 px-8 py-3 font-bold text-orange-900">
              ☀️ ÉNERGIE SOLAIRE
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Réduisez votre facture d’électricité
            <br />
            <span className="text-yellow-300">
              grâce au solaire photovoltaïque
            </span>
          </h1>

          <p className="mt-8 text-2xl">
            Solutions pour villas & usines.
            <br />
            Étude selon consommation + garantie + SAV.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-yellow-300/30 bg-white/10 px-6 py-5 text-xl font-bold text-yellow-300">
            ⚡ Projets généralement à partir d’environ{" "}
            <span className="text-4xl">1 500 MAD</span>/mois de facture
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl">
              ⚡
            </div>
            <h2 className="text-2xl font-bold">Visite gratuite</h2>
            <p className="mt-4 text-slate-600">
              Diagnostic complet de votre consommation énergétique.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl">
              🕒
            </div>
            <h2 className="text-2xl font-bold">Devis sous 24h</h2>
            <p className="mt-4 text-slate-600">
              Proposition tarifaire détaillée et transparente.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-4xl">
              🛡️
            </div>
            <h2 className="text-2xl font-bold">Garantie écrite</h2>
            <p className="mt-4 text-slate-600">
              Garantie panneaux, onduleurs et service après-vente.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-extrabold">Pourquoi nous choisir ?</h2>
          <p className="mt-4 text-xl text-slate-600">
            Des solutions solaires adaptées aux villas, commerces et industries.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-5">
            {[
              [
                "✅",
                "Étude personnalisée",
                "Analyse de votre consommation pour bien dimensionner l’installation.",
              ],
              [
                "🔧",
                "Installation sécurisée",
                "Équipes qualifiées et installation conforme.",
              ],
              [
                "📈",
                "Matériel fiable",
                "Panneaux, batteries et onduleurs de marques reconnues.",
              ],
              ["🏅", "Garantie + SAV", "Support technique après installation."],
              ["⚡", "Villa & industrie", "Solutions modulables selon vos besoins."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-100 text-3xl">
                  {icon}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-5xl">☀️</div>
          <h2 className="text-5xl font-extrabold">
            Demander votre étude gratuite
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Remplissez le formulaire ci-dessous, nous vous contactons rapidement.
          </p>

          <form className="mt-12 rounded-2xl bg-white p-8 text-left shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="font-bold">Type de projet</label>
                <select className="mt-2 w-full rounded-lg border p-4">
                  <option>Villa</option>
                  <option>Commerce</option>
                  <option>Usine</option>
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
                placeholder="ex: +212 660 604 614"
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
              href="https://wa.me/212660604614"
              target="_blank"
              className="mt-8 block rounded-lg bg-green-500 py-4 text-center text-xl font-bold text-white shadow-lg hover:bg-green-600"
            >
              ✈️ Envoyer via WhatsApp
            </Link>

            <p className="mt-6 text-center text-sm text-slate-500">
              En cliquant sur “Envoyer”, vous serez redirigé vers WhatsApp.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}