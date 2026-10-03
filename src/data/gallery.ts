export type GalleryCategory =
  | "Coiffure"
  | "Coloration"
  | "Soins"
  | "Mariage"
  | "Beauté";

export interface GalleryItem {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Coupe élégante",
    category: "Coiffure",
    image:
      "galery1.webp",
  },
  {
    id: 2,
    title: "Brushing naturel",
    category: "Coiffure",
    image:
      "galery2.webp",
  },
  {
    id: 3,
    title: "Chevelure lumineuse",
    category: "Coloration",
    image:
      "galery3.webp",
  },
  {
    id: 4,
    title: "Balayage naturel",
    category: "Coloration",
    image:
      "galery4.webp",
  },
  {
    id: 5,
    title: "Soin capillaire",
    category: "Soins",
    image:
      "galery5.webp",
  },
  {
    id: 6,
    title: "Rituel beauté",
    category: "Soins",
    image:
      "galery6.webp",
  },
  {
    id: 7,
    title: "Coiffure de mariée",
    category: "Mariage",
    image:
      "galery7.webp",
  },
  {
    id: 8,
    title: "Élégance événementielle",
    category: "Mariage",
    image:
      "galery13.webp",
  },
  {
    id: 9,
    title: "Manucure élégante",
    category: "Beauté",
    image:
      "galery9.webp",
  },
  {
    id: 10,
    title: "Mise en beauté",
    category: "Beauté",
    image:
      "galery10.webp",
  },
  {
    id: 11,
    title: "Style contemporain",
    category: "Coiffure",
    image:
      "galery11.webp",
  },
  {
    id: 12,
    title: "Finition professionnelle",
    category: "Coloration",
    image:
      "galery12.webp",
  },
];