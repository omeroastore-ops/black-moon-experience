import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Atmosphere } from "@/components/Atmosphere";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Black Moon · Premium Shisha Lounge" },
      {
        name: "description",
        content:
          "Black Moon — Luxus Shisha Lounge in Deutschland. Premium Shishas, Signature Cocktails und VIP Lounges. Tritt ein in eine Nacht, die nie endet.",
      },
      { property: "og:title", content: "Black Moon · Premium Shisha Lounge" },
      {
        property: "og:description",
        content: "Tritt ein in eine Nacht, die nie endet. Premium Shisha, Drinks & VIP.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <CustomCursor />
      <Nav />
      <Hero />
      <Atmosphere />
      <Experience />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}
