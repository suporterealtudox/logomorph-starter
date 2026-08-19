/** Dados de contato da LogoMorph. Mude aqui e vale no site inteiro. */
export const CONTATO = {
  whatsapp: '5562999283581',
  whatsappVisivel: '(62) 99928-3581',
  instagram: 'logo_morph3',
} as const;

/** Monta o link do WhatsApp com a mensagem já escrita. */
export function linkZap(mensagem: string): string {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const MSG_PADRAO = 'Olá Patrício! Vi o site da LogoMorph e quero uma logo.';
