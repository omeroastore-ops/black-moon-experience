import { createRootRoute, HeadContent, Outlet, Scripts, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Black Moon — Luxus Shisha Lounge" },
      { name: "description", content: "Tritt ein in eine Nacht, die nie endet. Premium Shisha Lounge in Deutschland." },
      { name: "theme-color", content: "#0a0414" },
      { property: "og:title", content: "Black Moon — Luxus Shisha Lounge" },
      { property: "og:description", content: "Tritt ein in eine Nacht, die nie endet." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-display text-gradient-primary mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Diese Seite existiert nicht.</p>
        <Link to="/" className="text-accent hover:underline">Zurück zur Startseite</Link>
      </div>
    </div>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
