import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Este projeto renderiza no servidor antes de chegar ao navegador.
// Registrar o plugin só faz sentido (e só é seguro) do lado do cliente.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Todas as animações do site.
 *
 * Regras que valem para tudo aqui:
 * - o show começa sozinho ao abrir a página, sem depender da configuração
 *   de movimento do sistema (decisão do dono do site);
 * - nada pode deixar conteúdo invisível para sempre: quando o navegador
 *   congela o quadro (aba em segundo plano, aparelho fraco) existem travas
 *   que mostram tudo na marra — em especial os botões de WhatsApp.
 */
export function useMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const limpezas: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const temMouse = matchMedia('(pointer:fine)').matches;

      /* ---------- abertura: a marca se formando ---------- */
      document.documentElement.classList.add('carregando');

      gsap
        .timeline()
        .to('.abertura .anel', { rotate: 360, duration: 1.1, ease: 'power2.inOut', repeat: -1 }, 0)
        .fromTo(
          '.abertura .selo img',
          { opacity: 0, scale: 0.55, rotate: -25 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: 'expo.out' },
          0.1,
        )
        .from('.abertura .legenda', { opacity: 0, y: 10, duration: 0.5 }, 0.5);

      let jaAbriu = false;

      function abrirSite() {
        if (jaAbriu) return;
        jaAbriu = true;
        gsap
          .timeline({
            onComplete: () => {
              document.getElementById('abertura')?.remove();
              document.documentElement.classList.remove('carregando');
              ligarMotion();
            },
          })
          .to('.abertura .anel', { opacity: 0, scale: 1.5, duration: 0.4, ease: 'power2.in' })
          .to('.abertura .selo', { scale: 1.25, opacity: 0, duration: 0.5, ease: 'power2.in' }, '-=0.25')
          .to('.abertura', { opacity: 0, duration: 0.45, ease: 'power2.inOut' }, '-=0.3');
      }

      const t1 = window.setTimeout(abrirSite, document.readyState === 'complete' ? 700 : 2200);

      // trava: se o navegador congelar o quadro, a animação de saída nunca
      // termina — passados 4,2s a capa sai de qualquer jeito
      const t2 = window.setTimeout(() => {
        const capa = document.getElementById('abertura');
        if (capa) {
          capa.remove();
          document.documentElement.classList.remove('carregando');
        }
        ligarMotion();
      }, 4200);

      limpezas.push(() => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      });

      function ligarMotion() {
        if (document.documentElement.classList.contains('motion-on')) return;
        document.documentElement.classList.add('motion-on');

        /* ---------- barra de progresso da leitura ---------- */
        gsap.to('#progresso', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: () => document.body.scrollHeight - innerHeight,
            scrub: 0.25,
          },
        });

        /* quebra em letras sem partir palavra no fim da linha */
        function emLetras(el: Element) {
          const texto = el.textContent ?? '';
          el.innerHTML = texto
            .split(' ')
            .map(
              (palavra) =>
                '<span class="palavra">' +
                [...palavra].map((c) => '<span class="char">' + c + '</span>').join('') +
                '</span>',
            )
            .join('<span class="char"> </span>');
        }

        /* ---------- entrada do hero ---------- */
        document.querySelectorAll('.hero h1 span').forEach(emLetras);

        const intro = gsap.timeline({ defaults: { ease: 'expo.out' } });
        intro
          .from('header', { yPercent: -100, duration: 0.6 })
          .from('.hero-kick', { opacity: 0, x: -34, duration: 0.5 }, '-=0.25')
          .from(
            '.hero h1 .char',
            { opacity: 0, yPercent: 110, duration: 0.7, stagger: 0.022, clearProps: 'transform' },
            '-=0.2',
          )
          .from('.hero p.sub', { opacity: 0, y: 26, duration: 0.55 }, '-=0.4')
          .from('.hero .hero-ctas .btn', { opacity: 0, y: 24, scale: 0.92, duration: 0.5, stagger: 0.09 }, '-=0.35')
          .from('.hero-proof div', { opacity: 0, x: -22, duration: 0.45, stagger: 0.08 }, '-=0.3')
          .from(
            '.logo-wrap',
            {
              opacity: 0,
              scale: 1.45,
              rotate: -14,
              y: -60,
              duration: 1.05,
              ease: 'expo.out',
              onComplete: brilho,
            },
            0.25,
          );

        const t3 = window.setTimeout(() => {
          if (intro.progress() < 1) intro.progress(1);
        }, 6000);
        limpezas.push(() => window.clearTimeout(t3));

        /* brilho metálico varrendo o emblema, sem parar */
        function brilho() {
          gsap.fromTo(
            '.glint',
            { xPercent: -260, rotate: 8 },
            { xPercent: 660, duration: 1.15, ease: 'power2.inOut', repeat: -1, repeatDelay: 2.2 },
          );
        }

        /* ---------- vida contínua no fundo ---------- */
        document.querySelectorAll('.aurora').forEach((a) => {
          const blobs = a.querySelectorAll('i');
          if (blobs.length < 2) return; // a aurora precisa dos dois brilhos
          gsap.to(blobs[0]!, {
            xPercent: 18,
            yPercent: 12,
            scale: 1.2,
            duration: 11,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          });
          gsap.to(blobs[1]!, {
            xPercent: -16,
            yPercent: -14,
            scale: 1.25,
            duration: 9,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: 1.4,
          });
        });

        /* partículas de ouro subindo */
        document.querySelectorAll('.particulas').forEach((campo) => {
          for (let i = 0; i < 26; i++) {
            const p = document.createElement('b');
            const tam = gsap.utils.random(3, 9);
            p.style.width = tam + 'px';
            p.style.height = tam + 'px';
            p.style.left = gsap.utils.random(0, 100) + '%';
            p.style.top = gsap.utils.random(0, 100) + '%';
            campo.appendChild(p);
            gsap.to(p, {
              y: gsap.utils.random(-140, -420),
              x: gsap.utils.random(-60, 60),
              opacity: 0,
              duration: gsap.utils.random(6, 13),
              delay: gsap.utils.random(0, 6),
              ease: 'none',
              repeat: -1,
              repeatRefresh: true,
            });
          }
        });

        /* logo do topo girando devagar */
        gsap.to('.brand img', { rotate: 360, duration: 26, ease: 'none', repeat: -1 });

        /* ---------- o emblema na mão: gira com o mouse ---------- */
        if (temMouse) {
          const palco = document.querySelector<HTMLElement>('.hero-visual');
          const peca = document.querySelector<HTMLElement>('.logo-wrap');
          const luz = document.querySelector<HTMLElement>('.holofote');

          if (palco && peca && luz) {
            gsap.set(palco, { perspective: 900 });
            gsap.set(peca, { transformStyle: 'preserve-3d' });
            const ry = gsap.quickTo(peca, 'rotationY', { duration: 0.6, ease: 'power2.out' });
            const rx = gsap.quickTo(peca, 'rotationX', { duration: 0.6, ease: 'power2.out' });

            palco.addEventListener('pointerenter', () => {
              gsap.to(luz, { opacity: 1, duration: 0.4 });
            });
            palco.addEventListener('pointermove', (e) => {
              const r = palco.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width;
              const py = (e.clientY - r.top) / r.height;
              ry((px - 0.5) * 34);
              rx(-(py - 0.5) * 26);
              luz.style.setProperty('--mx', px * 100 + '%');
              luz.style.setProperty('--my', py * 100 + '%');
            });
            palco.addEventListener('pointerleave', () => {
              ry(0);
              rx(0);
              gsap.to(luz, { opacity: 0, duration: 0.5 });
            });
          }

          /* partículas fogem do cursor */
          document.querySelectorAll<HTMLElement>('.particulas').forEach((campo) => {
            campo.parentElement?.addEventListener('pointermove', (evento) => {
              const e = evento as PointerEvent;
              const r = campo.getBoundingClientRect();
              const mx = e.clientX - r.left;
              const my = e.clientY - r.top;
              campo.querySelectorAll<HTMLElement>('b').forEach((b) => {
                const bb = b.getBoundingClientRect();
                const dx = bb.left - r.left + bb.width / 2 - mx;
                const dy = bb.top - r.top + bb.height / 2 - my;
                const dist = Math.hypot(dx, dy);
                if (dist < 130) {
                  const forca = (1 - dist / 130) * 46;
                  gsap.to(b, {
                    x: '+=' + (dx / (dist || 1)) * forca,
                    y: '+=' + (dy / (dist || 1)) * forca,
                    duration: 0.6,
                    ease: 'power2.out',
                    overwrite: 'auto',
                  });
                }
              });
            });
          });
        }

        /* ---------- letreiro de especialidades ---------- */
        const trilho = document.querySelector('.faixa-track');
        if (trilho) gsap.to(trilho, { xPercent: -50, duration: 26, ease: 'none', repeat: -1 });

        gsap.from('.faixa span em', {
          opacity: 0,
          y: 18,
          duration: 0.45,
          ease: 'expo.out',
          stagger: 0.07,
          scrollTrigger: { trigger: '.faixa', start: 'top 92%' },
        });

        /* ---------- títulos de seção ---------- */
        document.querySelectorAll('h2.display').forEach((h) => {
          if (h.closest('.final')) return; // o fechamento tem coreografia própria
          h.querySelectorAll('span').forEach(emLetras);
          gsap.from(h.querySelectorAll('.char'), {
            opacity: 0,
            yPercent: 100,
            duration: 0.6,
            clearProps: 'transform',
            ease: 'expo.out',
            stagger: 0.018,
            scrollTrigger: { trigger: h, start: 'top 86%' },
          });
        });

        document.querySelectorAll('.section-lead').forEach((p) => {
          if (p.closest('.final')) return; // o fechamento tem coreografia própria
          gsap.from(p, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'expo.out',
            delay: 0.12,
            scrollTrigger: { trigger: p, start: 'top 88%' },
          });
        });

        /* ---------- preços ---------- */
        gsap.from('.price', {
          opacity: 0,
          y: 90,
          duration: 0.85,
          clearProps: 'transform',
          ease: 'expo.out',
          stagger: 0.14,
          scrollTrigger: { trigger: '.price-grid', start: 'top 82%' },
        });

        /* os valores aparecem sempre exatos.
           A antiga contagem podia congelar no meio e deixar na tela um
           preço errado (39,66 em vez de 39,99). Agora o número do JSX é o
           que fica; só damos um destaque rápido quando ele entra na tela. */
        document.querySelectorAll<HTMLElement>('.conta').forEach((el) => {
          const escrito = el.dataset['valor'];
          if (escrito) el.textContent = escrito;

          gsap.from(el, {
            opacity: 0,
            y: 14,
            duration: 0.5,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          });
        });


        /* o plano em destaque respira */
        gsap.to('.price.destaque', { y: -8, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1 });

        /* ---------- portfólio: entrada em onda ----------
           O movimento é só transform (não altera o layout), então os cards
           continuam todos com a mesma altura na grade. */
        gsap.from('.folio', {
          opacity: 0,
          y: 56,
          scale: 0.96,
          duration: 0.7,
          ease: 'expo.out',
          stagger: 0.08,
          clearProps: 'transform',
          scrollTrigger: { trigger: '.folio-grid', start: 'top 84%' },
        });



        /* tilt 3D seguindo o mouse — por delegação, para continuar valendo
           nos cards que a troca de filtro recria */
        if (temMouse) {
          const grade = document.querySelector<HTMLElement>('.folio-grid');
          grade?.addEventListener('pointermove', (e) => {
            const card = (e.target as HTMLElement).closest<HTMLElement>('.folio');
            if (!card) return;
            const r = card.getBoundingClientRect();
            gsap.to(card, {
              rotationY: ((e.clientX - r.left) / r.width - 0.5) * 14,
              rotationX: -((e.clientY - r.top) / r.height - 0.5) * 14,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          });
          grade?.addEventListener('pointerout', (e) => {
            const card = (e.target as HTMLElement).closest<HTMLElement>('.folio');
            if (!card) return;
            if (card.contains(e.relatedTarget as Node)) return;
            gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.35, ease: 'power2.out' });
          });
        }

        /* ---------- passos ---------- */
        gsap.from('.step', {
          opacity: 0,
          y: 60,
          duration: 0.7,
          ease: 'expo.out',
          stagger: 0.16,
          scrollTrigger: { trigger: '.steps', start: 'top 84%' },
        });

        /* ---------- fechamento ---------- */
        gsap
          .timeline({
            defaults: { ease: 'expo.out' },
            scrollTrigger: { trigger: '.final', start: 'top 74%' },
          })
          .from('.final .display', { opacity: 0, scale: 0.82, y: 60, duration: 0.9 })
          .from('.final .section-lead', { opacity: 0, y: 26, duration: 0.5 }, '-=0.45')
          .from('.final .btn', { opacity: 0, y: 30, scale: 0.9, duration: 0.5, stagger: 0.1 }, '-=0.3')
          .from('.final .zap-num', { opacity: 0, duration: 0.4 }, '-=0.2');

        /* pulso de vida no botão flutuante */
        gsap.to('.zap-float', {
          scale: 1.07,
          duration: 0.9,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          repeatDelay: 2.2,
        });

        /* ---------- o topo some ao descer, volta ao subir ---------- */
        const cabecalho = document.querySelector('header');
        ScrollTrigger.create({
          start: 'top top',
          end: 'max',
          onUpdate: (self) => {
            gsap.to(cabecalho, {
              yPercent: self.direction === 1 && self.scroll() > 320 ? -100 : 0,
              duration: 0.35,
              ease: 'power2.out',
              overwrite: 'auto',
            });
          },
        });

        /* ---------- vigia: nada que esteja na tela pode ficar invisível ----------
           Se o navegador congelar uma animação, o conteúdo apareceria pela
           metade. A cada 2s conferimos: o que está na tela e continua apagado
           por duas rodadas seguidas, aparece na marra. Vale principalmente
           pelos botões de WhatsApp — são a venda. */
        const faltas = new WeakMap<Element, number>();
        const vigiados =
          '.final .display, .final .section-lead, .final .btn, .final .zap-num, ' +
          'h2.display, .section-lead, .price, .folio, .step';

        const relogio = window.setInterval(() => {
          if (document.visibilityState !== 'visible') return;
          document.querySelectorAll(vigiados).forEach((el) => {
            const b = el.getBoundingClientRect();
            const naTela = b.top < innerHeight && b.bottom > 0 && b.width > 0;
            const apagado = parseFloat(getComputedStyle(el).opacity) < 0.12;
            if (naTela && apagado) {
              const n = (faltas.get(el) ?? 0) + 1;
              faltas.set(el, n);
              if (n >= 2) gsap.set(el, { opacity: 1, clearProps: 'transform' });
            } else {
              faltas.set(el, 0);
            }
          });

          /* trava final: o preço exibido é sempre o do JSX */
          document.querySelectorAll<HTMLElement>('.conta').forEach((el) => {
            const certo = el.dataset['valor'];
            if (certo && el.textContent !== certo) {
              el.textContent = certo;
            }
          });

        }, 2000);
        limpezas.push(() => window.clearInterval(relogio));

        ScrollTrigger.refresh();
      }
    });

    return () => {
      limpezas.forEach((fn) => fn());
      ctx.revert();
      document.documentElement.classList.remove('motion-on', 'carregando');
    };
  }, []);
}
