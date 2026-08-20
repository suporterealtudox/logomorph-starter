/** A marca se monta na frente do visitante: primeiro o emblema LM,
 *  depois o nome, letra por letra.
 *
 *  Tudo aqui é o vetor original da LogoMorph, tirado do arquivo do
 *  designer e vestido de metal com relevo — não é recorte de imagem.
 *  Por ser vetor, fica nítido em qualquer tela e em qualquer tamanho.
 *
 *  As larguras estão na mesma unidade do desenho: é o que mantém a
 *  proporção entre as letras e o encaixe da palavra. */

const LETRAS = [
  { arquivo: '1-L.svg', largura: 59.5 },
  { arquivo: '2-O.svg', largura: 77.5 },
  { arquivo: '3-G.svg', largura: 76.0 },
  { arquivo: '4-O.svg', largura: 73.0 },
  { arquivo: '5-M.svg', largura: 87.1 }, // a dourada do meio, com a haste
  { arquivo: '6-O.svg', largura: 73.2 },
  { arquivo: '7-R.svg', largura: 73.7 },
  { arquivo: '8-P.svg', largura: 71.5 },
  { arquivo: '9-H.svg', largura: 76.0 },
];

export function Abertura() {
  return (
    <div className="abertura" id="abertura" aria-hidden="true">
      <div className="montagem">
        <img className="emblema" src="/img/letras3d/0-emblema.svg" alt="" />

        <div className="palavra-letras">
          {LETRAS.map((l) => (
            <img
              key={l.arquivo}
              className="letra"
              src={`/img/letras3d/${l.arquivo}`}
              alt=""
              style={{ width: `calc(var(--u) * ${l.largura})` }}
            />
          ))}
        </div>

        <span className="legenda">Transformando ideias em marcas de impacto</span>
      </div>
    </div>
  );
}
