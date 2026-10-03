import {
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { contact } from "../data/contact";
import { openWhatsApp } from "../utils/whatsapp";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Produits", path: "/produits" },
  { name: "Galerie", path: "/galerie" },
  { name: "À propos", path: "/a-propos" },
  { name: "Tarifs", path: "/tarifs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleReservation = () => {
    openWhatsApp();
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <div>
              <p
                className={`font-serif text-2xl font-bold ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                DOKOHELY <span className="text-pink-600">Boutique of Quality</span>
              </p>

              <p
                className={`text-[10px] uppercase tracking-[0.3em] ${
                  scrolled ? "text-neutral-500" : "text-white/70"
                }`}
              >
                Beauty & Hair
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-pink-600"
                      : scrolled
                        ? "text-neutral-700 hover:text-pink-600"
                        : "text-white hover:text-pink-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? "text-neutral-700" : "text-white"
              }`}
            >
              <Phone size={16} />
              {contact.phone}
            </a>

            <button
              type="button"
              onClick={handleReservation}
              className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/20 transition hover:-translate-y-0.5 hover:bg-pink-700"
            >
              Réserver
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-100 bg-white shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `border-b border-neutral-100 py-4 text-sm font-medium ${
                    isActive
                      ? "text-pink-600"
                      : "text-neutral-800 hover:text-pink-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                handleReservation();
              }}
              className="mt-5 rounded-full bg-pink-600 px-5 py-3 font-semibold text-white"
            >
              Réserver sur WhatsApp
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;