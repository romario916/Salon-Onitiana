export type ServiceCategory =
  | "Blanc"
  | "Rose"
  | "Noir"
  | "Jaune"
  | "Autres";

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: ServiceCategory;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Couleur blonde",
    description:
      "Une coupe personnalisée accompagnée d'un brushing soigné pour mettre votre style en valeur.",
    duration: "45 min",
    price: 35000,
    category: "Blanc",
    image:
      "blanc1.webp",
  },
   {
    id: 2,
    name: "Couleur blonde elegante",
    description:
      "Une coupe personnalisée accompagnée d'un brushing soigné pour mettre votre style en valeur.",
    duration: "45 min",
    price: 35000,
    category: "Blanc",
    image:
      "blanc2.webp",
  },
  {
    id: 3,
    name: "Couleur blonde  moderne",
    description:
      "Un brushing professionnel pour une chevelure souple, brillante et parfaitement coiffée.",
    duration: "30 min",
    price: 25000,
    category: "Blanc",
    image:
      "blanc3.webp",
  },
  
  {
    id: 4,
    name: "Coloration complète",
    description:
      "Une coloration personnalisée pour apporter profondeur, luminosité et caractère à votre chevelure.",
    duration: "1h30",
    price: 85000,
    category: "Rose",
    image:
      "rose1.webp",
  },
  {
    id: 5,
    name: "Balayage",
    description:
      "Des nuances lumineuses et naturelles pour donner du relief et de la dimension aux cheveux.",
    duration: "2h",
    price: 120000,
    category: "Rose",
    image:
      "rose2.webp",
  },
  {
    id: 6,
    name: "Balayage",
    description:
      "Des nuances lumineuses et naturelles pour donner du relief et de la dimension aux cheveux.",
    duration: "2h",
    price: 120000,
    category: "Rose",
    image:
      "rose2.webp",
  },

  {
    id: 7,
    name: "Soin profond",
    description:
      "Un soin professionnel pour nourrir, hydrater et revitaliser les cheveux en profondeur.",
    duration: "45 min",
    price: 45000,
    category: "Noir",
    image:
      "noir1.webp",
  },
  {
    id: 8,
    name: "Soin hydratant",
    description:
      "Un rituel hydratant pour retrouver des cheveux plus souples, doux et brillants.",
    duration: "30 min",
    price: 35000,
    category: "Noir",
    image:
      "noir2.webp",
  },
  

  {
    id: 9,
    name: "Coiffure mariage",
    description:
      "Une coiffure élégante et personnalisée pour accompagner votre journée exceptionnelle.",
    duration: "1h30",
    price: 120000,
    category: "Jaune",
    image:
      "jaune1.webp",
  },
  {
    id: 10,
    name: "Coiffure événement",
    description:
      "Une mise en beauté raffinée pour vos cérémonies, fêtes et événements importants.",
    duration: "1h",
    price: 80000,
    category: "Jaune",
    image:
      "jaune2.webp",
  },

  {
    id: 11,
    name: "Coiffure événement",
    description:
      "Une mise en beauté raffinée pour vos cérémonies, fêtes et événements importants.",
    duration: "1h",
    price: 80000,
    category: "Jaune",
    image:
      "jaune3.webp",
  },

  {
    id: 12,
    name: "Coiffure événement",
    description:
      "Une mise en beauté raffinée pour vos cérémonies, fêtes et événements importants.",
    duration: "1h",
    price: 80000,
    category: "Jaune",
    image:
      "jaune4.webp",
  },

  {
    id: 13,
    name: "Manucure",
    description:
      "Un soin complet des mains et des ongles pour une finition propre et élégante.",
    duration: "45 min",
    price: 30000,
    category: "Autres",
    image:
      "autre1.webp",
  },
  {
    id: 14,
    name: "Beauté des ongles",
    description:
      "Une prestation dédiée à la beauté et à la finition de vos ongles.",
    duration: "1h",
    price: 45000,
    category: "Autres",
    image:
      "autre2.webp",
  },

   {
    id: 15,
    name: "Beauté des ongles",
    description:
      "Une prestation dédiée à la beauté et à la finition de vos ongles.",
    duration: "1h",
    price: 45000,
    category: "Autres",
    image:
      "autre3.webp",
  },

   {
    id: 16,
    name: "Beauté des ongles",
    description:
      "Une prestation dédiée à la beauté et à la finition de vos ongles.",
    duration: "1h",
    price: 45000,
    category: "Autres",
    image:
      "autre4.webp",
  },
  
];