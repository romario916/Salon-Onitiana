import {
  ArrowRight,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { useState } from "react";

import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import {
  products,
  type ProductCategory,
} from "../data/products";
import { openWhatsApp } from "../utils/whatsapp";

const categories: Array<
  ProductCategory | "Tous"
> = [
  "Tous",
  "Shampoing",
  "Soin",
  "Coiffage",
  "Maquillage",
  "Outils",
];

const Products = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory | "Tous">("Tous");

  const filteredProducts =
    activeCategory === "Tous"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory,
        );

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pb-24 pt-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-green-600/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-600 text-white">
              <ShoppingBag size={30} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
              Boutique beauté
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold text-white sm:text-6xl">
              Les produits que nous aimons
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Retrouvez une sélection de produits professionnels
              pour prolonger votre routine beauté à la maison.
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

      {/* PRODUITS */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
                Notre sélection
              </p>

              <h2 className="mt-2 font-serif text-3xl font-bold text-black">
                Produits disponibles au salon
              </h2>
            </div>

            <p className="text-sm text-neutral-500">
              {filteredProducts.length} produit
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-3xl bg-white py-20 text-center">
              <p className="text-neutral-500">
                Aucun produit disponible dans cette catégorie.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* INFO WHATSAPP */}
      <section className="bg-white py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-black">
            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
                  Besoin d'un conseil ?
                </p>

                <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
                  Nous pouvons vous aider à choisir.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
                  Vous hésitez entre plusieurs produits ? Contactez
                  directement Vanesa Bauté sur WhatsApp pour obtenir
                  des informations avant votre achat.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      "Bonjour Vanesa Bauté, j'aimerais avoir des conseils concernant vos produits disponibles au salon.",
                    )
                  }
                  className="mt-7 inline-flex items-center rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Demander conseil
                  <ArrowRight size={17} className="ml-2" />
                </button>
              </div>

              <div className="hidden h-full min-h-[360px] lg:block">
                <img
                  src="https://images.unsplash.com/photo-1556229010-aa3c3f2c1f2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Produits de beauté Vanesa Bauté"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-16">
        <Container>
          <div className="text-center">
            <SectionTitle
              eyebrow="DOKOHELY Boutique of Quality"
              title="Découvrez nos produits au salon"
              description="Les disponibilités peuvent varier. Contactez-nous sur WhatsApp avant de vous déplacer."
              light
            />

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black shadow-xl transition hover:-translate-y-1"
            >
              Nous contacter
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Products;