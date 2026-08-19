/** As letras da marca chegam voando e se encaixam formando LOGOMORPH.
 *  Cada arquivo é um recorte da logo verdadeira: emendadas na ordem,
 *  remontam a palavra exatamente como no original. */

const LETRAS = [
  { arquivo: '1-L.png', largura: 148 },
  { arquivo: '2-O.png', largura: 228 },
  { arquivo: '3-G.png', largura: 216 },
  { arquivo: '4-O.png', largura: 232 },
  { arquivo: '5-M.png', largura: 328 },
  { arquivo: '6-O.png', largura: 228 },
  { arquivo: '7-R.png', largura: 212 },
  { arquivo: '8-P.png', largura: 208 },
  { arquivo: '9-H.png', largura: 216 },
];

const ALTURA_ORIGINAL = 344;

export function Abertura() {
  return (
    <div className="abertura" id="abertura" aria-hidden="true">
      <div className="montagem">
        <div className="palavra-letras">
          {LETRAS.map((l) => (
            <img
              key={l.arquivo}
              className="letra"
              src={`/img/letras/${l.arquivo}`}
              alt=""
              width={l.largura}
              height={ALTURA_ORIGINAL}
              style={{ aspectRatio: `${l.largura} / ${ALTURA_ORIGINAL}` }}
            />
          ))}
          <span className="clarao" />
        </div>
        <span className="legenda">Transformando ideias em marcas de impacto</span>
      </div>
    </div>
  );
}
