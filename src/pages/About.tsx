import {
  ArrowRight,
  Heart,
  Leaf,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import { team } from "../data/team";
import { openWhatsApp } from "../utils/whatsapp";

const values = [
  {
    title: "Excellence",
    description:
      "Nous recherchons la qualité et la précision dans chaque prestation.",
    icon: Star,
  },
  {
    title: "Bien-être",
    description:
      "Chaque visite doit être un véritable moment de détente et de plaisir.",
    icon: Heart,
  },
  {
    title: "Écoute",
    description:
      "Vos envies sont au centre de notre approche et de nos conseils.",
    icon: MessageCircle,
  },
  {
    title: "Naturel",
    description:
      "Nous privilégions une beauté harmonieuse qui respecte votre personnalité.",
    icon: Leaf,
  },
];

const About = () => {
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
              Notre histoire
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold text-white sm:text-6xl">
              À propos de DOKOHELY Boutique of Quality
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Un espace où beauté, bien-être et élégance se rencontrent
              pour créer une expérience qui vous ressemble.
            </p>
          </div>
        </Container>
      </section>

      {/* HISTOIRE */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="apropo.webp"
                  alt="Salon Vanesa Bauté"
                  className="h-[500px] w-full object-contain"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 right-6 rounded-3xl bg-black p-6 shadow-2xl sm:right-10">
                <p className="font-serif text-3xl font-bold text-white">
                  DOKOHELY <span className="text-pink-600">Boutique of Quality</span>
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-pink-400">
                  Bauté
                </p>
              </div>
            </div>

            {/* Texte */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
                Notre vision
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-black sm:text-5xl">
                Plus qu'un salon, un moment pour vous.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-neutral-600">
                <p>
                  DOKOHELY est né d'une envie simple : créer un
                  espace chaleureux où chaque personne peut prendre le
                  temps de prendre soin d'elle.
                </p>

                <p>
                  Nous croyons que la beauté ne se résume pas à une
                  tendance. Elle commence par l'écoute, la confiance et
                  la compréhension de ce qui vous correspond réellement.
                </p>

                <p>
                  Notre équipe vous accompagne avec attention, de la
                  coiffure aux soins beauté, dans une atmosphère élégante
                  et apaisante.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    "Bonjour Vanesa Bauté, je souhaite découvrir vos prestations et prendre rendez-vous.",
                  )
                }
                className="mt-8 inline-flex items-center rounded-full bg-pink-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-700"
              >
                Découvrir nos prestations
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* VALEURS */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Ce qui guide notre travail"
            description="Chaque détail de l'expérience Vanesa Bauté repose sur des valeurs simples et essentielles."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-3xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-bold text-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ÉQUIPE */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionTitle
            eyebrow="Notre équipe"
            title="Des professionnelles passionnées"
            description="Une équipe attentive et passionnée qui vous accompagne pour révéler votre beauté."
          />

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CHIFFRES */}
      <section className="bg-black py-20">
        <Container>
          <div className="grid gap-10 text-center sm:grid-cols-3">
            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-white">
                <Users size={25} />
              </div>

              <p className="mt-5 font-serif text-4xl font-bold text-white">
                100+
              </p>

              <p className="mt-2 text-sm text-white/50">
                Clientes accompagnées
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white">
                <Sparkles size={25} />
              </div>

              <p className="mt-5 font-serif text-4xl font-bold text-white">
                15+
              </p>

              <p className="mt-2 text-sm text-white/50">
                Prestations beauté
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 text-white">
                <Heart size={25} />
              </div>

              <p className="mt-5 font-serif text-4xl font-bold text-white">
                100%
              </p>

              <p className="mt-2 text-sm text-white/50">
                Passion & attention
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Votre moment
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">
              Prenez du temps pour vous.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/80">
              Contactez Vanesa Bauté directement sur WhatsApp et
              organisons ensemble votre prochain rendez-vous.
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

export default About;