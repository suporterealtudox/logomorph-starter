/** O escudo da LogoMorph se monta na frente do visitante.
 *
 *  Nada aqui é imagem recortada: o aro, o disco, o monograma, as letras,
 *  a frase e a barra de contato são peças separadas, em vetor, tiradas do
 *  arquivo do designer e vestidas de metal. Cada uma chega no seu tempo
 *  até o escudo ficar inteiro.
 *
 *  As medidas estão em porcentagem do escudo (620x620 no desenho), então
 *  a montagem inteira acompanha o tamanho da tela sem sair do lugar. */

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
      <div className="escudo">
        {/* as três camadas de metal do escudo */}
        <img className="peca aro" src="/img/escudo/1-aro.svg" alt="" />
        <img className="peca disco" src="/img/escudo/2-disco.svg" alt="" />
        <img className="peca anel" src="/img/escudo/3-anel.svg" alt="" />

        {/* o monograma, no alto */}
        <img className="peca monograma" src="/img/letras3d/0-emblema.svg" alt="" />

        {/* o nome, letra por letra */}
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

        {/* a assinatura e o contato */}
        <img className="peca frase" src="/img/escudo/4-frase.svg" alt="" />
        <img className="peca contato" src="/img/escudo/5-contato.svg" alt="" />
      </div>
    </div>
  );
}
