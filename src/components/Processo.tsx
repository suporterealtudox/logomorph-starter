import { PASSOS } from '../data/passos';

export function Processo() {
  return (
    <section className="processo metal" id="processo">
      <div className="wrap">
        <h2 className="display">
          <span className="chrome-word">Simples assim</span>
        </h2>
        <div className="steps">
          {PASSOS.map((p) => (
            <div className="step" key={p.titulo}>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
