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
      </div>
    </header>
  );
}
