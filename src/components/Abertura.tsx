/** O escudo da LogoMorph se monta na frente do visitante.
 *
 *  Cada peça é um pedaço da arte real da marca, recortado dela mesma —
 *  não é desenho refeito. Por isso, quando todas assentam, o escudo fica
 *  exatamente igual ao original.
 *
 *  As medidas estão em porcentagem do escudo (o desenho tem 620x620), o
 *  que mantém tudo no lugar em qualquer tamanho de tela. */

type Peca = { nome: string; x: number; y: number; w: number };

const PECAS: Peca[] = [
  { nome: 'monograma', x: 24.194, y: 9.677, w: 51.613 },
  { nome: 'nome-1-L', x: 6.129, y: 53.226, w: 7.419 },
  { nome: 'nome-2-O', x: 13.226, y: 53.226, w: 9.516 },
  { nome: 'nome-3-G', x: 22.419, y: 53.226, w: 9.194 },
  { nome: 'nome-4-O', x: 31.29, y: 53.226, w: 10.0 },
  { nome: 'nome-5-M', x: 40.968, y: 52.419, w: 14.194 }, // a dourada, com a haste
  { nome: 'nome-6-O', x: 54.677, y: 53.226, w: 9.677 },
  { nome: 'nome-7-R', x: 64.032, y: 53.226, w: 9.032 },
  { nome: 'nome-8-P', x: 72.581, y: 53.226, w: 9.032 },
  { nome: 'nome-9-H', x: 80.806, y: 53.226, w: 10.484 },
  { nome: 'frase', x: 9.677, y: 68.387, w: 80.645 },
  { nome: 'contato', x: 17.742, y: 74.516, w: 64.516 },
];

export function Abertura() {
  return (
    <div className="abertura" id="abertura" aria-hidden="true">
      <div className="escudo">
        {/* o disco e o aro: a base onde as peças assentam */}
        <img className="base" src="/img/escudo/base.png" alt="" />

        {PECAS.map((p) => (
          <img
            key={p.nome}
            className={`peca ${p.nome.startsWith('nome-') ? 'letra' : p.nome}`}
            src={`/img/pecas/${p.nome}.png`}
            alt=""
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}%` }}
          />
        ))}
      </div>
    </div>
  );
}
