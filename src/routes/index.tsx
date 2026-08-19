import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LogoMorph" },
      { name: "description", content: "LogoMorph" },
      { property: "og:title", content: "LogoMorph" },
      { property: "og:description", content: "LogoMorph" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="text-2xl font-semibold tracking-tight text-foreground">
        LogoMorph
      </span>
    </div>
  );
}
