import { createFileRoute } from "@tanstack/react-router";

import { useMotion } from "@/hooks/useMotion";
import { Abertura } from "@/components/Abertura";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Faixa } from "@/components/Faixa";
import { Servicos } from "@/components/Servicos";
import { Portfolio } from "@/components/Portfolio";
import { Processo } from "@/components/Processo";
import { CtaFinal } from "@/components/CtaFinal";
import { Rodape } from "@/components/Rodape";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LogoMorph — Logotipos 3D que impõem respeito" },
      {
        name: "description",
        content:
          "LogoMorph: criação, transformação e vetorização de logotipos 3D hiper-realistas. Sua ideia, nossa transformação, sua marca em outro nível. Atendimento direto no WhatsApp.",
      },
      { name: "color-scheme", content: "dark" },
      { name: "theme-color", content: "#04070F" },
      {
        property: "og:title",
        content: "LogoMorph — Transformando ideias em marcas de impacto",
      },
      {
        property: "og:description",
        content:
          "Logotipos 3D hiper-realistas a partir de R$ 44,99. Criação, transformação e vetorização. Chame no WhatsApp: 62 99928-3581.",
      },
      { property: "og:image", content: "/img/logomorph-logo.png" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", href: "/img/logomorph-logo.png", type: "image/png" },
    ],
  }),
  component: Index,
});

function Index() {
  useMotion();

  return (
    <>
      <Abertura />
      <div className="progresso" id="progresso" aria-hidden="true" />
      <Header />
      <main id="topo">
        <Hero />
        <Faixa />
        <Servicos />
        <Portfolio />
        <Processo />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
