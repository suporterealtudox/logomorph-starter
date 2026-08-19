import { SERVICOS } from '../data/servicos';
import { linkZap } from '../data/contato';
import { IconeCheck } from './Icones';

export function Servicos() {
  return (
    <section className="servicos metal" id="servicos">
      <div className="wrap">
        <h2 className="display">
          <span className="chrome-word">Escolha o serviço.</span>{' '}
          <span className="gold-word">O resto é com a gente.</span>
        </h2>
        <p className="section-lead">
          Preço fechado, sem surpresa. Você fala direto com o designer — sem robô, sem fila de
          agência.
        </p>
        <div className="price-grid">
          {SERVICOS.map((s) => (
            <article key={s.id} className={s.destaque ? 'price destaque' : 'price'}>
              {s.selo && <span className="flag">{s.selo}</span>}
              <h3>{s.nome}</h3>
              <p className="desc">{s.descricao}</p>
              <div className="valor">
                <span className="rs">R$</span>
                <b className="conta" data-valor={s.preco}>
                  {s.preco}
                </b>
              </div>
              <ul>
                {s.itens.map((item) => (
                  <li key={item}>
                    <IconeCheck />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                className={s.destaque ? 'btn btn-gold' : 'btn btn-ghost'}
                href={linkZap(s.mensagemZap)}
                target="_blank"
                rel="noopener"
              >
                {s.textoBotao}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
