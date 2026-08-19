import { IconeZap, IconeInstagram } from './Icones';
import { CONTATO, linkZap, MSG_PADRAO } from '../data/contato';

export function Rodape() {
  return (
    <>
      <footer>
        <div className="wrap">
          <img src="/img/logomorph-logo.png" alt="" width={52} height={52} />
          <p>
            <b>LogoMorph®</b> — Transformando ideias em marcas de impacto.
            <br />
            Atendimento em todo o Brasil pelo WhatsApp {CONTATO.whatsappVisivel}.
          </p>
          <div className="social">
            <a
              href={`https://www.instagram.com/${CONTATO.instagram}`}
              target="_blank"
              rel="noopener"
              aria-label="Instagram da LogoMorph"
            >
              <IconeInstagram tamanho={20} />
            </a>
            <a
              href={`https://wa.me/${CONTATO.whatsapp}`}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp da LogoMorph"
            >
              <IconeZap tamanho={20} />
            </a>
          </div>
        </div>
      </footer>

      <a
        className="zap-float"
        href={linkZap(MSG_PADRAO)}
        target="_blank"
        rel="noopener"
        aria-label="Chamar a LogoMorph no WhatsApp"
      >
        <IconeZap tamanho={30} />
      </a>
    </>
  );
}
