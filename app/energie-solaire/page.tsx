import Link from "next/link";

export default function EnergieSolairePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081B45] via-[#0B245A] to-[#103B8C] px-6 py-24 text-center text-white">
        <Link
          href="/"
          className="absolute left-8 top-8 rounded-lg border border-blue-400/40 px-5 py-3 text-blue-100 hover:bg-blue-500/10"
        >
          ← Retour au site principal
        </Link>

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex justify-center">
            <span className="rounded-full bg-blue-500 px-8 py-3 font-bold text-white">
              ⚡ ÉNERGIE SOLAIRE
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Réduisez votre facture d’électricité
            <br />
            <span className="text-blue-300">
              grâce au solaire photovoltaïque
            </span>
          </h1>

          <p className="mt-8 text-2xl">
  Solutions pour villas & usines.
  <br />
  Étude selon consommation + garantie + SAV.
</p>

<div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
  <Link
    href="https://wa.me/212660604614"
    target="_blank"
    className="rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-green-600"
  >
    📱 Demander un devis gratuit
  </Link>

  <Link
    href="#services"
    className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#081B45]"
  >
    ⚡ Découvrir nos solutions
  </Link>
</div>

<p className="mt-4 text-sm text-blue-200">
  ✓ Étude gratuite • ✓ Réponse rapide • ✓ Sans engagement
</p>

<div className="mx-auto mt-10 max-w-3xl rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-5 text-xl font-bold text-blue-200">
  ⚡ Projets généralement à partir d’environ{" "}
  <span className="text-4xl">1 500 MAD</span>/mois de facture
</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            ["⚡", "Visite gratuite", "Diagnostic complet de votre consommation énergétique."],
            ["🕒", "Devis sous 24h", "Proposition tarifaire détaillée et transparente."],
            ["🛡️", "Garantie écrite", "Garantie panneaux, onduleurs et service après-vente."],
          ].map(([icon, title, text]) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
                {icon}
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-4 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}