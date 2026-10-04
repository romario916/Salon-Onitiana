import {
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import {
  services,
  type ServiceCategory,
} from "../data/services";
import { openWhatsApp } from "../utils/whatsapp";

const categories: Array<
  ServiceCategory | "Toutes"
> = [
  "Toutes",
  "Blanc",
  "Rose",
  "Noir",
  "Jaune",
  "Autres",
];

const Pricing = () => {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategory | "Toutes">("Toutes");

  const filteredServices =
    activeCategory === "Toutes"
      ? services
      : services.filter(
          (service) => service.category === activeCategory,
        );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pb-24 pt-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-600 text-white">
              <Sparkles size={29} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
              Nos tarifs
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold text-white sm:text-6xl">
              Des prestations pour chaque envie
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Découvrez nos tarifs et choisissez la prestation qui
              correspond à vos envies.
            </p>
          </div>
        </Container>
      </section>

      {/* FILTRES */}
      <section className="border-b border-neutral-100 bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-pink-600 text-white shadow-lg shadow-pink-600/20"
                      : "bg-neutral-100 text-neutral-700 hover:bg-black hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TARIFS */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Carte des prestations"
            title="Nos tarifs"
            description="Une présentation claire de nos prestations, durées et tarifs."
          />

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm">
            {/* En-tête desktop */}
            <div className="hidden border-b border-neutral-100 bg-black px-8 py-5 text-sm font-semibold text-white md:grid md:grid-cols-[1fr_140px_160px_180px] md:gap-5">
              <span>Prestation</span>
              <span>Durée</span>
              <span>Prix</span>
              <span className="text-right">Réservation</span>
            </div>

            {/* Lignes */}
            <div className="divide-y divide-neutral-100">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group px-6 py-6 transition hover:bg-pink-50/40 sm:px-8"
                >
                  {/* Desktop */}
                  <div className="hidden md:grid md:grid-cols-[1fr_140px_160px_180px] md:items-center md:gap-5">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                          <Sparkles size={17} />
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-black">
                            {service.name}
                          </h3>

                          <p className="mt-1 text-xs text-neutral-500">
                            {service.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock3
                        size={16}
                        className="text-green-600"
                      />
                      {service.duration}
                    </div>

                    <p className="font-bold text-pink-600">
                      {service.price.toLocaleString(
                        "fr-FR",
                      )}{" "}
                      Ar
                    </p>

                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() =>
                          openWhatsApp(
                            `Bonjour Vanesa Bauté, je souhaite réserver le service "${service.name}". Pouvez-vous me renseigner sur les disponibilités ?`,
                          )
                        }
                        className="inline-flex items-center rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-600"
                      >
                        Réserver
                        <ArrowRight
                          size={15}
                          className="ml-2"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                          {service.category}
                        </span>

                        <h3 className="mt-3 font-serif text-xl font-bold text-black">
                          {service.name}
                        </h3>
                      </div>

                      <p className="shrink-0 font-bold text-pink-600">
                        {service.price.toLocaleString(
                          "fr-FR",
                        )}{" "}
                        Ar
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                      <Clock3
                        size={16}
                        className="text-green-600"
                      />
                      {service.duration}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        openWhatsApp(
                          `Bonjour Vanesa Bauté, je souhaite réserver le service "${service.name}". Pouvez-vous me renseigner sur les disponibilités ?`,
                        )
                      }
                      className="mt-5 flex w-full items-center justify-center rounded-full bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                    >
                      Réserver cette prestation
                      <ArrowRight
                        size={16}
                        className="ml-2"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INFORMATIONS */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-neutral-100 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Check size={22} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Tarifs transparents
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Consultez facilement les prix de nos principales
                prestations.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                <Clock3 size={22} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Durées indicatives
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                La durée peut varier selon vos cheveux et les besoins
                spécifiques de la prestation.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-100 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <MessageCircle size={22} />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold">
                Une question ?
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Contactez-nous directement sur WhatsApp pour connaître
                les disponibilités et obtenir des informations.
              </p>

              <button
                type="button"
                onClick={() => openWhatsApp()}
                className="mt-5 text-sm font-semibold text-pink-600 transition hover:text-pink-700"
              >
                Nous contacter →
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-black py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              Votre moment beauté
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              Choisissez votre prestation.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Pour réserver, contactez simplement Vanesa Bauté sur
              WhatsApp.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="mt-8 inline-flex items-center rounded-full bg-pink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              <MessageCircle size={18} className="mr-2" />
              Réserver sur WhatsApp
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Pricing;