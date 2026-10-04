import {
  ArrowRight,
  Expand,
  Heart,
} from "lucide-react";
import { useState } from "react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { galleryItems, type GalleryCategory } from "../data/gallery";
import { openWhatsApp } from "../utils/whatsapp";

const categories: Array<GalleryCategory | "Toutes"> = [
  "Toutes",
  "Blanc",
  "Rose",
  "Orange",
  "Jaune",
  "Autres",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory | "Toutes">("Toutes");

  const filteredItems =
    activeCategory === "Toutes"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
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
              <Heart size={29} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
              Notre univers
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold text-white sm:text-6xl">
              Galerie
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Découvrez quelques inspirations et réalisations qui
              reflètent l'univers de Salon de Beauté Onitiana.
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

      {/* GALERIE */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <div className="mb-12">
            <SectionTitle
              eyebrow="Nos réalisations"
              title="L'inspiration en images"
              description="Chaque réalisation est pensée pour révéler votre personnalité et mettre votre beauté en valeur."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                {/* Icône */}
                <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={18} />
                </div>

                {/* Informations */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 transition duration-500 group-hover:translate-y-0">
                  <span className="inline-flex rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/60">
                    Vanesa Bauté
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="rounded-3xl bg-white py-20 text-center">
              <p className="text-neutral-500">
                Aucune réalisation dans cette catégorie.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* INSPIRATION */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="galery7.webp"
                alt="Salon DOKOHELY Boutique of Quality"
                className="h-[450px] w-full object-contain transition duration-700 hover:scale-110"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
                Votre style
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-black sm:text-5xl">
                Une beauté qui vous ressemble.
              </h2>

              <p className="mt-6 text-base leading-8 text-neutral-600">
                Chaque personne est unique. Notre approche consiste à
                écouter vos envies, comprendre votre style et vous
                accompagner vers une mise en beauté qui vous
                correspond.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Écoute",
                  "Précision",
                  "Élégance",
                  "Bien-être",
                ].map((value) => (
                  <span
                    key={value}
                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
                  >
                    {value}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Bonjour Vanesa Bauté, je souhaite prendre rendez-vous.",
                  )
                }
                className="mt-8 inline-flex items-center rounded-full bg-pink-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Prendre rendez-vous
                <ArrowRight size={18} className="ml-2" />
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
              Votre prochaine transformation
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              Prête à créer votre prochain look ?
            </h2>

            <p className="mt-5 text-base leading-8 text-white/60">
              Contactez-nous directement pour discuter de votre projet
              beauté et réserver votre moment chez Salon de Beauté Onitiana.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="mt-8 inline-flex items-center rounded-full bg-pink-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Réserver sur WhatsApp
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Gallery;