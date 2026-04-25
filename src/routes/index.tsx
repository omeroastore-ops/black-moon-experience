import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Atmosphere } from "@/components/Atmosphere";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main id="top" className="relative bg-background text-foreground">
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
