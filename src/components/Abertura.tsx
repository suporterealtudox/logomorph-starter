/** Capa que aparece enquanto o site carrega: a marca se formando. */
export function Abertura() {
  return (
    <div className="abertura" id="abertura" aria-hidden="true">
      <div className="selo">
        <div className="anel" />
        <img src="/img/logomorph-logo.png" alt="" width={220} height={220} />
        <span className="legenda">Transformando ideias</span>
      </div>
    </div>
  );
}
