
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { contact } from "../data/contact";
import {
  getContactFormMessage,
  openWhatsApp,
} from "../utils/whatsapp";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Veuillez remplir les champs obligatoires.");
      return;
    }

    setError("");

    const whatsappMessage = getContactFormMessage(
      name,
      phone,
      message,
    );

    openWhatsApp(whatsappMessage);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pb-24 pt-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-600/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-green-600/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-600 text-white">
              <MessageCircle
                size={29}
                aria-hidden="true"
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
              Contactez-nous
            </p>

            <h1 className="mt-3 font-serif text-5xl font-bold text-white sm:text-6xl">
              Parlons de votre beauté
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              Une question, une demande ou une réservation ? Notre
              équipe est à votre écoute.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTACT + FORMULAIRE */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* INFORMATIONS */}
            <div>
              <SectionTitle
  eyebrow="Nos coordonnées"
  title="Restons en contact"
  description="Retrouvez toutes les informations nécessaires pour nous joindre."
/>

              <div className="mt-8 space-y-4">
                {/* WHATSAPP */}
                <button
                  type="button"
                  onClick={() => openWhatsApp()}
                  aria-label="Contacter Vanesa Bauté sur WhatsApp"
                  className="flex min-h-[44px] w-full items-start gap-4 rounded-3xl bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600"
                    aria-hidden="true"
                  >
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-semibold text-black">
                      {contact.phone}
                    </p>

                    <p className="mt-1 text-sm text-green-600">
                      Nous écrire directement
                    </p>
                  </div>
                </button>

                {/* TÉLÉPHONE */}
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  aria-label={`Appeler Vanesa Bauté au ${contact.phone}`}
                  className="flex min-h-[44px] items-start gap-4 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-600"
                    aria-hidden="true"
                  >
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Téléphone
                    </p>

                    <p className="mt-1 font-semibold text-black">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${contact.email}`}
                  aria-label={`Envoyer un email à ${contact.email}`}
                  className="flex min-h-[44px] items-start gap-4 rounded-3xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600"
                    aria-hidden="true"
                  >
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-black">
                      {contact.email}
                    </p>
                  </div>
                </a>

                {/* ADRESSE */}
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-600"
                    aria-hidden="true"
                  >
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Adresse
                    </p>

                    <p className="mt-1 font-semibold leading-6 text-black">
                      {contact.address}
                    </p>
                  </div>
                </div>

                {/* HORAIRES */}
                <div className="rounded-3xl bg-black p-6 text-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600"
                      aria-hidden="true"
                    >
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        Horaires
                      </p>

                      <p className="mt-1 font-semibold">
                        Nos horaires d'ouverture
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    {contact.openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between gap-4 border-b border-white/10 pb-2 text-sm last:border-0"
                      >
                        <span className="text-white/60">
                          {item.day}
                        </span>

                        <span className="font-medium">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
                  Message
                </p>

                <h2 className="mt-2 font-serif text-3xl font-bold text-black">
                  Écrivez-nous
                </h2>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  Votre message sera préparé automatiquement et envoyé
                  via WhatsApp.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* NOM */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-black"
                  >
                    Nom <span aria-hidden="true">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Votre nom"
                    autoComplete="name"
                    required
                    aria-required="true"
                    aria-invalid={Boolean(error && !name.trim())}
                    className="min-h-[44px] w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/10"
                  />
                </div>

                {/* TÉLÉPHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-black"
                  >
                    Téléphone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="Votre numéro de téléphone"
                    autoComplete="tel"
                    className="min-h-[44px] w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/10"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-black"
                  >
                    Message <span aria-hidden="true">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows={6}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(
                      error && !message.trim(),
                    )}
                    className="w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-neutral-400 focus:border-pink-600 focus:ring-4 focus:ring-pink-600/10"
                  />
                </div>

                {/* ERREUR */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-2xl bg-pink-50 px-4 py-3 text-sm font-medium text-pink-700"
                  >
                    {error}
                  </p>
                )}

                {/* BOUTON */}
                <button
                  type="submit"
                  aria-label="Envoyer le formulaire via WhatsApp"
                  className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-pink-600 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2"
                >
                  <MessageCircle
                    size={19}
                    className="mr-2"
                    aria-hidden="true"
                  />

                  Envoyer via WhatsApp

                  <ArrowRight
                    size={18}
                    className="ml-2"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* CARTE */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Nous trouver"
            title="Venez nous rendre visite"
            description="Retrouvez Salon de Beauté Onitiana à notre adresse."
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-100 shadow-sm">
            <iframe
              title={`Carte indiquant l'adresse de ${contact.salonName}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                contact.address,
              )}&output=embed`}
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* RÉSEAUX SOCIAUX */}
      <section className="bg-neutral-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
              Suivez-nous
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-black">
              Retrouvez {contact.salonName} sur les réseaux
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Découvrez nos actualités, inspirations et nouvelles
              réalisations.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              {contact.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter ${contact.salonName} sur ${social.name}`}
                  className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full bg-black px-4 text-sm font-bold text-white transition duration-300 hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 focus-visible:ring-offset-2"
                >
                  {social.name === "Instagram" ? "IG" : "f"}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="bg-pink-600 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-pink-600"
              aria-hidden="true"
            >
              <Sparkles size={24} />
            </div>

            <h2 className="mt-5 font-serif text-4xl font-bold text-white sm:text-5xl">
              Votre prochain rendez-vous commence ici.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/80">
              Écrivez-nous directement sur WhatsApp pour réserver votre
              moment chez DOKOHELY.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              aria-label="Réserver un rendez-vous chez Vanesa Bauté via WhatsApp"
              className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pink-600"
            >
              <MessageCircle
                size={18}
                className="mr-2"
                aria-hidden="true"
              />

              Réserver maintenant
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

