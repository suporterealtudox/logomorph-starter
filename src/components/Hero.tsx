import { IconeZap } from './Icones';
import { linkZap, MSG_PADRAO } from '../data/contato';

export function Hero() {
  return (
    <section className="hero metal">
      <div className="aurora" aria-hidden="true">
        <i /><i />
      </div>
      <div className="particulas" aria-hidden="true" />
      <div className="wrap">
        <div>
          <span className="hero-kick">Transformando ideias em marcas de impacto</span>
          <h1 className="display">
            <span className="chrome-word">Sua marca</span>
            <br />
            <span className="gold-word">em outro nível</span>
          </h1>
          <p className="sub">
            Logotipos 3D hiper-realistas que fazem seu negócio parecer grande — criados sob medida
            pelo designer Patrício e entregues direto no seu WhatsApp.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-whats" href={linkZap(MSG_PADRAO)} target="_blank" rel="noopener">
              <IconeZap />
              Pedir minha logo
            </a>
            <a className="btn btn-ghost" href="#portfolio">
              Ver trabalhos
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <b>3D 8K</b>
              <span>ultra realista</span>
            </div>
            <div>
              <b>R$&nbsp;44,99</b>
              <span>a partir de</span>
            </div>
            <div>
              <b>WhatsApp</b>
              <span>atendimento direto</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="logo-wrap">
            <img
              src="/img/logomorph-logo.png"
              alt="Logo oficial da LogoMorph: emblema circular 3D azul metálico com monograma LM em cromo e dourado"
              width={620}
              height={620}
              fetchPriority="high"
            />
            <div className="glint-clip" aria-hidden="true">
              <div className="glint" />
            </div>
            <div className="holofote" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
