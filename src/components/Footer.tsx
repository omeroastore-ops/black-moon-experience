export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-display text-4xl text-foreground">
              Black <span className="italic text-gold">Moon</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Premium Shisha Lounge · Deutschland
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                Öffnungszeiten
              </p>
              <p className="text-muted-foreground">Mo – So</p>
              <p className="text-foreground">18:00 – 03:00</p>
            </div>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                Kontakt
              </p>
              <p className="text-foreground">+49 151 12345678</p>
              <p className="text-muted-foreground">hello@blackmoon.de</p>
            </div>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                Folge uns
              </p>
              <div className="flex gap-3 text-foreground">
                <a href="#" className="hover:text-gold">Instagram</a>
                <a href="#" className="hover:text-gold">TikTok</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Black Moon Lounge. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
