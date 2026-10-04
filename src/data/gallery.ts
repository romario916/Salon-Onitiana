export type GalleryCategory =
  | "Blanc"
  | "Rose"
  | "Orange"
  | "Jaune"
  | "Autres";

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
    category: "Autres",
    image:
      "galery1.webp",
  },
  {
    id: 2,
    title: "Brushing naturel",
    category: "Blanc",
    image:
      "galery2.webp",
  },
  {
    id: 3,
    title: "Chevelure lumineuse",
    category: "Jaune",
    image:
      "galery3.webp",
  },
  {
    id: 4,
    title: "Balayage naturel",
    category: "Orange",
    image:
      "galery4.webp",
  },
  {
    id: 5,
    title: "Soin capillaire",
    category: "Rose",
    image:
      "galery5.webp",
  },
  {
    id: 6,
    title: "Rituel beauté",
    category: "Autres",
    image:
      "galery6.webp",
  },
 
 
];