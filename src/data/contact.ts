export interface SocialLink {
  name: string;
  url: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export const contact = {
  salonName: "Salon de Beauté Onitiana",

  whatsapp: "261378911098",

  phone: "034 05 021 65",

  email: "onivolarasoa@gmail.com",

  address: "Antananarivo, Besarety tany malalaka",

  defaultWhatsAppMessage:
    "Bonjour Salon de Beauté Onitiana, je souhaite prendre rendez-vous. Pouvez-vous me renseigner sur les disponibilités ?",

  openingHours: [
    {
      day: "Lundi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Mardi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Mercredi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Jeudi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Vendredi",
      hours: "09:00 - 18:00",
    },
    {
      day: "Samedi",
      hours: "09:00 - 17:00",
    },
    {
      day: "Dimanche",
      hours: "Fermé",
    },
  ] as OpeningHour[],

  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },
  ] as SocialLink[],
};