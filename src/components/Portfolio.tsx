import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TRABALHOS, FILTROS, type FiltroId, type Trabalho } from '../data/trabalhos';
import { Lupa } from './Lupa';

export function Portfolio() {
  const [filtro, setFiltro] = useState<FiltroId>('tudo');
  const [ampliado, setAmpliado] = useState<Trabalho | null>(null);

  const grade = useRef<HTMLDivElement>(null);
  /** posições dos cards no instante do clique, para animar a mudança */
  const posicoesAntes = useRef<Map<string, DOMRect>>(new Map());

  const visiveis = TRABALHOS.filter(
    (t) => filtro === 'tudo' || t.categoria === filtro,
  );

  function trocarFiltro(novo: FiltroId) {
    if (novo === filtro) return;
    const mapa = new Map<string, DOMRect>();
    grade.current?.querySelectorAll<HTMLElement>('.folio').forEach((el) => {
      mapa.set(el.dataset['arquivo']!, el.getBoundingClientRect());
    });
    posicoesAntes.current = mapa;
    setFiltro(novo);
  }

  // depois que a grade se reorganiza, cada card desliza do lugar antigo
  // para o novo, em vez de simplesmente pular
  useLayoutEffect(() => {
    // na primeira carga quem comanda a entrada e o scroll (ver useMotion);
    // aqui so animamos quando o visitante troca de filtro
    if (posicoesAntes.current.size === 0) return;

    const cards = grade.current?.querySelectorAll<HTMLElement>('.folio');
    if (!cards?.length) return;

    cards.forEach((el, i) => {
      const antes = posicoesAntes.current.get(el.dataset['arquivo']!);
      const agora = el.getBoundingClientRect();

      if (antes) {
        gsap.fromTo(
          el,
          { x: antes.left - agora.left, y: antes.top - agora.top },
          { x: 0, y: 0, duration: 0.6, ease: 'expo.out' },
        );
      }
      gsap.fromTo(
        el,
        { opacity: antes ? 0.25 : 0, scale: antes ? 0.9 : 0.94 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out', delay: i * 0.04 },
      );
    });

    posicoesAntes.current.clear();
  }, [filtro]);

  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <h2 className="display">
          <span className="chrome-word">Trabalho de verdade,</span>{' '}
          <span className="gold-word">feito aqui</span>
        </h2>
        <p className="section-lead">
          Cada emblema abaixo saiu do WhatsApp de um cliente real — times, federações,
          hamburgueria, rastreamento veicular. O próximo pode ser o seu.
        </p>

        <div className="filtros" role="group" aria-label="Filtrar trabalhos por tipo">
          {FILTROS.map((f) => (
            <button
              key={f.id}
              className="filtro"
              type="button"
              aria-pressed={filtro === f.id}
              onClick={() => trocarFiltro(f.id)}
            >
              {f.rotulo}
            </button>
          ))}
        </div>

        <div className="folio-grid" ref={grade}>
          {visiveis.map((t) => (
            <figure
              key={t.arquivo}
              className="folio"
              data-arquivo={t.arquivo}
              role="button"
              tabIndex={0}
              onClick={() => setAmpliado(t)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setAmpliado(t);
                }
              }}
            >
              <img
                src={`/img/${t.arquivo}`}
                alt={t.descricaoImagem}
                loading="lazy"
                width={800}
                height={800}
              />
              <figcaption>
                {t.nome}
                <small>{t.tipo}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Lupa trabalho={ampliado} aoFechar={() => setAmpliado(null)} />
    </section>
  );
}
