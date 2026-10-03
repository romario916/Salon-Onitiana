import {
  ArrowRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { openWhatsApp } from "../utils/whatsapp";
import { clientVideos } from "../data/videos";

const heroImages = [
  {
    image:
      "acail2.webp",
    title: "Révélez votre beauté",
    subtitle:
      "Une expérience beauté élégante, personnalisée et pensée pour vous.",
  },
  {
    image:
      "acail1.webp",
    title: "Prenez soin de vous",
    subtitle:
      "Coiffure, soins et beauté dans une atmosphère chaleureuse et raffinée.",
  },
  
];

const featuredServices = [
  {
    title: "Coiffure",
    description:
      "Coupe, brushing et coiffage adaptés à votre style et à vos envies.",
    icon: Scissors,
  },
  {
    title: "Coloration",
    description:
      "Des couleurs lumineuses et personnalisées pour sublimer vos cheveux.",
    icon: Sparkles,
  },
  {
    title: "Soins beauté",
    description:
      "Des soins conçus pour prendre soin de votre peau et de vos cheveux.",
    icon: Heart,
  },
  {
    title: "Beauté événementielle",
    description:
      "Une mise en beauté élégante pour vos événements et moments importants.",
    icon: Star,
  },
];

const galleryImages = [
  {
    image:
      "photo1.webp",
    category: "Coiffure",
  },
  {
    image:
      "photo2.webp",
    category: "Beauté",
  },
  {
    image:
      "photo3.webp",
    category: "Mise en beauté",
  },
  {
    image:
      "photo4.webp",
    category: "Coiffure",
  },
  {
    image:
      "photo5.webp",
    category: "Maquillage",
  },
  {
    image:
      "photo6.webp",
    category: "Style",
  },
];

const products = [
  {
    name: "Shampoing Réparateur",
    brand: "L'Oréal Professionnel",
    price: "À partir de 45 000 Ar",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Soin Hydratant",
    brand: "Kérastase",
    price: "À partir de 55 000 Ar",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Huile Capillaire",
    brand: "Professionnel",
    price: "À partir de 35 000 Ar",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Sarah R.",
    text: "Une très belle expérience. L'équipe est attentionnée et le résultat correspond parfaitement à mes attentes.",
    rating: 5,
  },
  {
    name: "Mia T.",
    text: "Un salon élégant avec une équipe professionnelle. Je recommande pour la qualité des prestations.",
    rating: 5,
  },
  {
    name: "Nadia H.",
    text: "J'ai particulièrement apprécié l'accueil et les conseils personnalisés. Je reviendrai avec plaisir.",
    rating: 5,
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % heroImages.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) =>
        (current - 1 + heroImages.length) % heroImages.length,
    );
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
  {heroImages.map((slide, index) => (
    <div
      key={slide.image}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Arrière-plan flou : remplit l'espace sans bandes noires */}
      <img
        src={slide.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
      />

      {/* Image réelle : cover sur mobile, entière sur grand écran */}
      <img
        src={slide.image}
        alt="Salon Vanesa Bauté"
        className="relative h-full w-full object-cover xl:object-contain"
      />

      <div className="absolute inset-0 bg-black/55" />
    </div>
  ))}

  <Container className="relative z-10 pt-20">
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-pink-300">
        Beauty • Hair • Wellness
      </p>

      <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-8xl">
        {heroImages[currentSlide].title}
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 sm:text-xl">
        {heroImages[currentSlide].subtitle}
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Button onClick={() => openWhatsApp()}>
          <CalendarCheck size={18} className="mr-2" />
          Réserver
        </Button>

        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Découvrir nos services
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  </Container>

  {/* Slider controls */}
  <div className="absolute bottom-10 left-0 right-0 z-10">
    <Container>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {heroImages.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Afficher la diapositive ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? "w-10 bg-pink-500"
                  : "w-5 bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Image précédente"
            className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white hover:text-black"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Image suivante"
            className="rounded-full border border-white/30 p-3 text-white transition hover:bg-white hover:text-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Container>
  </div>
</section>

      {/* INTRODUCTION */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
               <img
  src="acail3.webp"
  alt="Espace beauté DOKOHELY Boutique of Quality"
  className="h-auto w-full object-contain"
/>
              </div>

              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-black p-6 text-white shadow-2xl sm:-right-6">
                <p className="font-serif text-3xl font-bold">
                  100%
                </p>
                <p className="mt-1 text-sm text-white/60">
                  dédié à votre beauté
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
                Bienvenue chez nous
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight text-black sm:text-5xl">
                La beauté commence par
                <span className="text-pink-600"> prendre soin de soi.</span>
              </h2>

              <p className="mt-6 leading-8 text-neutral-600">
                DOKOHELY Boutique of Quality est un espace dédié à la beauté et au
                bien-être. Notre équipe vous accompagne avec attention
                pour créer une expérience adaptée à votre personnalité,
                votre style et vos envies.
              </p>

              <p className="mt-4 leading-8 text-neutral-600">
                Chaque rendez-vous est pensé comme un moment pour vous
                détendre, prendre soin de vous et repartir avec confiance.
              </p>

              <div className="mt-8">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center font-semibold text-black transition hover:text-pink-600"
                >
                  Découvrir notre histoire
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TEMOIGNAGES VIDEO */}
      <section className="bg-neutral-50 py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Témoignages"
            title="Ce que nos clientes disent"
            description="Découvrez les expériences de nos clientes et comment elles ont apprécié nos services."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientVideos.map((video) => (
              <a
                key={video.name}
                href={video.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir la vidéo de ${video.name} sur Facebook`}
                className="group relative block overflow-hidden rounded-3xl bg-black shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={video.image}
                    alt={video.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-600 text-white shadow-xl transition duration-500 group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-7 w-7"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      Témoignage cliente
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      {video.name}
                    </h3>

                    <p className="mt-2 text-sm text-white/80">
                      {video.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>



      {/* SERVICES */}
      <section className="bg-neutral-50 py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Nos expertises"
            title="Des soins pensés pour vous"
            description="Découvrez une sélection de nos prestations et laissez notre équipe prendre soin de votre beauté."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-pink-600"
                  >
                    En savoir plus
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:bg-black hover:text-white"
            >
              Voir tous les services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* GALERIE */}
      <section className="bg-white py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Notre galerie"
            title="Quelques réalisations"
            description="Découvrez quelques-uns des styles et mises en beauté réalisés dans notre salon."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {galleryImages.map((item) => (
              <Link
                to="/galerie"
                key={item.image}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/galerie"
              className="inline-flex items-center font-semibold text-black hover:text-pink-600"
            >
              Voir toute la galerie
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* PRODUITS */}
      <section className="bg-black py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Nos produits"
            title="Prenez soin de votre beauté au quotidien"
            description="Une sélection de produits professionnels disponibles directement au salon."
            light
          />

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-3xl bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
                    {product.brand}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl font-bold text-black">
                    {product.name}
                  </h3>

                  <p className="mt-3 font-semibold text-pink-600">
                    {product.price}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openWhatsApp(
                        `Bonjour Vanesa Bauté, je souhaite avoir des informations sur le produit "${product.name}".`,
                      )
                    }
                    className="mt-5 flex items-center text-sm font-semibold text-black hover:text-pink-600"
                  >
                    Commander via WhatsApp
                    <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/produits"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Découvrir nos produits
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </Container>
      </section>

      {/* TEMOIGNAGES */}
      <section className="bg-neutral-50 py-24 lg:py-32">
        <Container>
          <SectionTitle
            eyebrow="Ils nous font confiance"
            title="Ce que nos clientes disent"
            description="Chaque expérience compte. Découvrez quelques témoignages de nos clientes."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        className="fill-pink-500 text-pink-500"
                      />
                    ),
                  )}
                </div>

                <p className="mt-6 leading-7 text-neutral-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-6 border-t border-neutral-100 pt-5">
                  <p className="font-semibold text-black">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-green-600">
                    Cliente Vanesa Bauté
                  </p>
                </div>
              </div>
            ),
          )}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-pink-600 py-20">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Clock3
              size={38}
              className="mx-auto text-white"
            />

            <h2 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl">
              Prête à prendre soin de vous ?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/80">
              Contactez-nous directement sur WhatsApp pour réserver votre
              prochain rendez-vous chez Vanesa Bauté.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black shadow-xl transition hover:-translate-y-1"
            >
              Prendre rendez-vous
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;