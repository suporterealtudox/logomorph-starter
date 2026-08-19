import { IconeZap, IconeInstagram } from './Icones';
import { CONTATO, linkZap, MSG_PADRAO } from '../data/contato';

export function CtaFinal() {
  return (
    <section className="final">
      <div className="particulas" aria-hidden="true" />
      <div className="wrap">
        <h2 className="display">
          <span className="chrome-word">Sua ideia. Nossa transformação.</span>
          <br />
          <span className="gold-word">Sua marca em outro nível.</span>
        </h2>
        <p className="section-lead">
          Deixe sua marca falar por você. Chame agora e receba sua logo direto no WhatsApp.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-whats" href={linkZap(MSG_PADRAO)} target="_blank" rel="noopener">
            <IconeZap />
            Chamar no WhatsApp
          </a>
          <a
            className="btn btn-ghost"
            href={`https://www.instagram.com/${CONTATO.instagram}`}
            target="_blank"
            rel="noopener"
          >
            <IconeInstagram />
            @{CONTATO.instagram}
          </a>
        </div>
        <p className="zap-num">
          WhatsApp:{' '}
          <a href={`tel:+${CONTATO.whatsapp}`} style={{ textDecoration: 'none' }}>
            <b>{CONTATO.whatsappVisivel}</b>
          </a>
        </p>
      </div>
    </section>
  );
}
