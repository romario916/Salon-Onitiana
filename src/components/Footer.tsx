import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import { contact } from "../data/contact";

const footerLinks = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Produits", path: "/produits" },
  { name: "Galerie", path: "/galerie" },
  { name: "À propos", path: "/a-propos" },
  { name: "Tarifs", path: "/tarifs" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo et présentation */}
          <div>
            <Link to="/" className="inline-block">
              <p className="font-serif text-3xl font-bold">
                Salon de Beauté <span className="text-pink-600">Onitiana</span>
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
                Beauty & Hair
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Un espace dédié à la beauté, au bien-être et à la confiance
              en soi. Découvrez une expérience beauté pensée pour vous.
            </p>

            {/* Réseaux sociaux */}
            <div className="mt-6 flex items-center gap-3">
              {contact.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/70 transition duration-300 hover:border-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  {social.name === "Instagram" ? "IG" : "FB"}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/60 transition duration-300 hover:translate-x-1 hover:text-pink-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Nous contacter
            </h3>

            <div className="space-y-5">
              {/* Adresse */}
              <div className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-green-500"
                />

                <span className="text-sm leading-6 text-white/60">
                  {contact.address}
                </span>
              </div>

              {/* Téléphone */}
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex gap-3 text-sm text-white/60 transition hover:text-pink-500"
              >
                <Phone
                  size={19}
                  className="shrink-0 text-green-500"
                />

                <span>{contact.phone}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-3 text-sm text-white/60 transition hover:text-pink-500"
              >
                <Mail
                  size={19}
                  className="shrink-0 text-green-500"
                />

                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Horaires
            </h3>

            <div className="space-y-3">
              {contact.openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span className="text-white/60">
                    {item.day}
                  </span>

                  <span
                    className={
                      item.hours === "Fermé"
                        ? "text-pink-500"
                        : "text-white"
                    }
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Petit badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-medium text-green-500">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Sur rendez-vous
            </div>
          </div>
        </div>

        {/* Ligne basse */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/40">
             Cette site est développée par {"RAKOTOVAO Henry Romario  PDG "}
              <a
                href="https://www.facebook.com/profile.php?id=61594460594713&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600"
              >
                RoTech Web
              </a>
            </p>

            <div className="flex gap-5 text-xs text-white/40">
              <Link
                to="/"
                className="transition hover:text-pink-500"
              >
                037 33 621 72
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-pink-500"
              >
                Facebook: Ro Mar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;