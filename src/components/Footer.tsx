export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-2xl font-bold text-gradient-primary">BLACK MOON</div>
        <p className="text-sm text-foreground/60">© {new Date().getFullYear()} Black Moon Lounge. Alle Rechte vorbehalten.</p>
        <div className="flex gap-6 text-sm text-foreground/60">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
