import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { IconeFechar } from './Icones';
import { linkZap } from '../data/contato';
import type { Trabalho } from '../data/trabalhos';

type Props = {
  trabalho: Trabalho | null;
  aoFechar: () => void;
};

/** Trabalho ampliado em tela cheia, com o botão que puxa a conversa
 *  já citando o nome da logo que a pessoa clicou. */
export function Lupa({ trabalho, aoFechar }: Props) {
  const caixa = useRef<HTMLDivElement>(null);
  const botaoFechar = useRef<HTMLButtonElement>(null);

  // entrada: o emblema chega girando
  useEffect(() => {
    if (!trabalho) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo('.lupa', { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(
          '.lupa img',
          { scale: 0.7, rotateY: -35, opacity: 0 },
          { scale: 1, rotateY: 0, opacity: 1, duration: 0.7, ease: 'expo.out' },
          '-=0.15',
        )
        .fromTo(
          ['.lupa-info', '.lupa .btn'],
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: 'expo.out' },
          '-=0.35',
        );
    });

    botaoFechar.current?.focus();
    document.documentElement.style.overflow = 'hidden';

    function noTeclado(e: KeyboardEvent) {
      if (e.key === 'Escape') aoFechar();
    }
    document.addEventListener('keydown', noTeclado);

    return () => {
      ctx.revert();
      document.removeEventListener('keydown', noTeclado);
      document.documentElement.style.overflow = '';
    };
  }, [trabalho, aoFechar]);

  if (!trabalho) return null;

  return (
    <div
      className="lupa aberta"
      role="dialog"
      aria-modal="true"
      aria-label={`${trabalho.nome} ampliado`}
      onClick={(e) => {
        if (e.target === e.currentTarget) aoFechar();
      }}
    >
      <div className="lupa-caixa" ref={caixa}>
        <button
          className="lupa-fechar"
          type="button"
          aria-label="Fechar"
          ref={botaoFechar}
          onClick={aoFechar}
        >
          <IconeFechar />
        </button>
        <img src={`/img/${trabalho.arquivo}`} alt={trabalho.descricaoImagem} width={800} height={800} />
        <div className="lupa-info">
          <h3>{trabalho.nome}</h3>
          <small>{trabalho.tipo}</small>
        </div>
        <a
          className="btn btn-gold"
          href={linkZap(
            `Olá Patrício! Vi a logo "${trabalho.nome}" no site da LogoMorph e quero uma assim.`,
          )}
          target="_blank"
          rel="noopener"
        >
          Quero uma assim
        </a>
      </div>
    </div>
  );
}
