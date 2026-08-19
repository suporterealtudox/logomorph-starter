import { IconeZap } from './Icones';
import { linkZap, MSG_PADRAO } from '../data/contato';

export function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#topo" aria-label="LogoMorph — início">
          <img src="/img/logomorph-logo.png" alt="" width={46} height={46} />
          <b>
            LOGO<span className="m">MORPH</span>
          </b>
        </a>
        <nav aria-label="Seções do site">
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#processo">Como funciona</a>
        </nav>
        <a
          className="btn btn-whats btn-sm cta-mini"
          href={linkZap(MSG_PADRAO)}
          target="_blank"
          rel="noopener"
        >
          <IconeZap tamanho={17} />
          Chamar agora
        </a>
      </div>
    </header>
  );
}
