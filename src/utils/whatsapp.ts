import { contact } from "../data/contact";

export const getWhatsAppLink = (
  message: string = contact.defaultWhatsAppMessage
): string => {
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
};

export const getServiceBookingMessage = (
  serviceName: string
): string => {
  return `Bonjour Vanesa Bauté, je souhaite réserver le service suivant : ${serviceName}. Pouvez-vous me renseigner sur les disponibilités et le tarif ?`;
};

export const getContactFormMessage = (
  name: string,
  phone: string,
  message: string
): string => {
  return `Bonjour DOKOHELY Boutique of Quality,

Je vous contacte depuis votre site internet.

Nom : ${name}
Téléphone : ${phone || "Non renseigné"}

Message :
${message}`;
};

export const openWhatsApp = (
  message: string = contact.defaultWhatsAppMessage
): void => {
  const whatsappLink = getWhatsAppLink(message);

  window.open(whatsappLink, "_blank", "noopener,noreferrer");
};