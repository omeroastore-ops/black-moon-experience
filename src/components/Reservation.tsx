import { motion } from "framer-motion";
import { useState } from "react";

export function Reservation() {
  const [form, setForm] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "20:00",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hallo Black Moon, ich möchte gerne reservieren:%0A%0A👤 Name: ${form.name}%0A👥 Gäste: ${form.guests}%0A📅 Datum: ${form.date}%0A🕐 Uhrzeit: ${form.time}%0A%0ADanke!`;
    // Replace with real number
    window.open(`https://wa.me/4915112345678?text=${msg}`, "_blank");
  };

  return (
    <section id="reservation" className="relative py-32 sm:py-48">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.2 0.12 295 / 0.4), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Reservierung</p>
          <h2 className="font-display text-5xl text-foreground sm:text-6xl">
            Sichere dir <span className="italic text-gold">deine Nacht</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir bestätigen deine Reservierung direkt über WhatsApp.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-strong rounded-3xl p-8 sm:p-10 glow-violet"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Dein Name"
                className="w-full bg-transparent py-3 text-foreground outline-none placeholder:text-muted-foreground/60"
              />
            </Field>
            <Field label="Gäste">
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-transparent py-3 text-foreground outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={n} className="bg-card">
                    {n} {n === 1 ? "Person" : "Personen"}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Datum">
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-transparent py-3 text-foreground outline-none [color-scheme:dark]"
              />
            </Field>
            <Field label="Uhrzeit">
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-transparent py-3 text-foreground outline-none [color-scheme:dark]"
              />
            </Field>
          </div>

          <button
            type="submit"
            className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-transform hover:scale-[1.02] glow-gold"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Über WhatsApp reservieren</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block rounded-2xl border border-border/60 bg-background/40 px-4 py-1 transition-colors focus-within:border-gold/60">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-gold">
        {label}
      </span>
      {children}
    </label>
  );
}
