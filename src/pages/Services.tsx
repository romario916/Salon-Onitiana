import {
  ArrowRight,
  CalendarCheck,
  Check,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import {
  services,
  type ServiceCategory,
} from "../data/services";
import { openWhatsApp } from "../utils/whatsapp";

const categories: Array<{
  name: string;
  value: ServiceCategory | "Tous";
}> = [
  {
    name: "Tous",
    value: "Tous",
  },
  {
    name: "Blanc",
    value: "Blanc",
  },
  {
    name: "Rose",
    value: "Rose",
  },
  
  {
    name: "Noir",
    value: "Noir",
  },
  {
    name: "Jaune",
    value: "Jaune",
  },
  {
    name: "Autres",
    value: "Autres",
  },
];

const categoryDescriptions: Record<
  ServiceCategory,
  string
> = {
  Blanc:
    "Des coiffures personnalisées pour révéler votre style et votre personnalité.",
  Rose:
    "Des techniques professionnelles pour apporter lumière, profondeur et caractère.",
  Noir:
    "Des soins ciblés pour prendre soin de vos cheveux et leur redonner leur éclat.",
  Jaune:
    "Des coiffures élégantes pour vos mariages, cérémonies et occasions spéciales.",
  Autres:
    "Des prestations beauté pour prendre soin de vous jusque dans les moindres détails.",
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<
    ServiceCategory | "Tous"
  >("Tous");

  const filteredServices =
    activeCategory === "Tous"
      ? services
      : services.filter(
          (service) => service.category === activeCategory,
        );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pt-32 pb-24">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-green-600/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
              Nos prestations
            </p>

            <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
              Des soins qui vous ressemblent
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Découvrez notre sélection de prestations beauté et
              coiffure réalisées avec attention par notre équipe.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="mt-8 inline-flex items-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              <CalendarCheck size={18} className="mr-2" />
              Prendre rendez-vous
            </button>
          </div>
        </Container>
      </section>

      {/* FILTRES */}
    <section className="border-b border-neutral-100 bg-white py-6 sm:py-8">
  <Container>
    <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
      {categories.map((category) => {
        const isActive = activeCategory === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => setActiveCategory(category.value)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-pink-600 text-white shadow-md shadow-pink-600/20"
                : "bg-neutral-100 text-neutral-700 hover:bg-pink-50 hover:text-pink-600"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  </Container>
</section>

{/* SERVICES */}
<section className="bg-neutral-50 py-16 sm:py-20 lg:py-28">
  <Container>
    {activeCategory !== "Tous" && (
      <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
        <h2 className="font-serif text-2xl font-bold text-black sm:text-3xl">
          {activeCategory}
        </h2>

        <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
          {categoryDescriptions[activeCategory]}
        </p>
      </div>
    )}

    <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>

    {filteredServices.length === 0 && (
      <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
        <p className="text-sm text-neutral-500 sm:text-base">
          Aucun service disponible dans cette catégorie.
        </p>
      </div>
    )}
  </Container>
</section>

      {/* POURQUOI NOUS */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Notre engagement"
            title="Une expérience pensée pour vous"
            description="Au-delà d'une prestation, nous souhaitons vous offrir un véritable moment de bien-être."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <Check size={25} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Écoute
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Nous prenons le temps de comprendre vos envies avant
                chaque prestation.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                <CalendarCheck size={25} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Sur rendez-vous
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Organisez facilement votre visite directement avec
                notre équipe sur WhatsApp.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <MessageCircle size={25} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Contact simple
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Une question sur un service ? Notre équipe est
                directement accessible par WhatsApp.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-black py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-neutral-900 p-8 sm:p-12 lg:flex-row">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                Votre prochain rendez-vous
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">
                Prête à prendre soin de vous ?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">
                Choisissez votre prestation et contactez-nous
                directement pour connaître nos disponibilités.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex shrink-0 items-center rounded-full bg-pink-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Réserver maintenant
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </Container>
      </section>

      {/* LIEN TARIFS */}
      <section className="bg-pink-600 py-5">
        <Container>
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-sm font-medium text-white">
              Vous souhaitez consulter uniquement les tarifs ?
            </p>

            <Link
              to="/tarifs"
              className="inline-flex items-center text-sm font-bold text-white underline underline-offset-4 hover:text-white/80"
            >
              Voir les tarifs
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;