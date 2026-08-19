import { ESPECIALIDADES } from '../data/passos';

/** Letreiro de especialidades que corre sem parar. */
export function Faixa() {
  const linha = (
    <span>
      {ESPECIALIDADES.map((palavra) => (
        <em key={palavra}>
          <i />
          {palavra}
        </em>
      ))}
    </span>
  );

  return (
    <div className="faixa" aria-hidden="true">
      <div className="faixa-track">
        {linha}
        {linha}
      </div>
    </div>
  );
}
