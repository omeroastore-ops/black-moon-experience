import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "4915112345678"; // TODO: replace with real number

export function Reservation() {
  const [form, setForm] = useState({ name: "", guests: "2", date: "", time: "20:00" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hallo Black Moon! Ich möchte einen Tisch reservieren.%0A%0A👤 Name: ${form.name}%0A👥 Gäste: ${form.guests}%0A📅 Datum: ${form.date}%0A🕐 Uhrzeit: ${form.time}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section id="reservation" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Reservierung</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-display font-bold text-gradient-primary">
            Sichere deinen Platz.
          </h2>
          <p className="mt-4 text-foreground/70">Über WhatsApp — schnell und persönlich.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={submit}
          className="glass rounded-3xl p-8 md:p-10 space-y-5"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <Field label="Name">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-base"
              placeholder="Dein Name"
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Gäste">
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="input-base"
              >
                {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Uhrzeit">
              <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="input-base"
              />
            </Field>
          </div>
          <Field label="Datum">
            <input
              required
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="input-base"
            />
          </Field>

          <button
            type="submit"
            className="w-full mt-2 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium tracking-wide hover:scale-[1.02] transition-transform"
            style={{ boxShadow: "var(--shadow-neon)" }}
          >
            Über WhatsApp reservieren
          </button>
        </motion.form>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          background: oklch(0.12 0.03 285 / 0.6);
          border: 1px solid oklch(0.3 0.06 285 / 0.5);
          color: var(--foreground);
          padding: 0.875rem 1rem;
          border-radius: 0.75rem;
          outline: none;
          transition: border-color 200ms, box-shadow 200ms;
          font-size: 1rem;
        }
        .input-base:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.55 0.25 295 / 0.2);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2 block">{label}</span>
      {children}
    </label>
  );
}
