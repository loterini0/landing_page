"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email inválido";
    }
    if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulario enviado:", form);
      setSent(true);
    }
  };

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-[10px] text-white text-sm placeholder:text-white/25 outline-none transition-all duration-200 focus:border-[#2C6FFF]/60 focus:bg-white/8";

  return (
    <section className="w-full bg-[#0c254a] py-20 px-6 font-sans">
      <div className="max-w-[560px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-white/20" />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/40">
            Contacto
          </span>
          <span className="w-8 h-px bg-white/20" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-[2rem] font-bold text-center tracking-tight mb-2">
          Hablemos de tu operación
        </h2>
        <p className="text-white/45 text-sm text-center leading-relaxed mb-10">
          Cuéntanos qué necesitas y un especialista de Cobent
          <br className="hidden sm:block" /> te contactará en menos de 24 horas.
        </p>

        {/* Card */}
        <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Nombre */}
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45 mb-2">
                Nombre
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-35 pointer-events-none"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <circle cx="8" cy="5.5" r="2.5" stroke="white" strokeWidth="1.4" />
                  <path d="M2.5 13c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className={`${inputBase} h-[46px] pl-10 pr-4`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45 mb-2">
                Email
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 opacity-35 pointer-events-none"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="white" strokeWidth="1.4" />
                  <path d="M1.5 5.5l6.5 4 6.5-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <input
                  type="email"
                  placeholder="tu@empresa.com"
                  className={`${inputBase} h-[46px] pl-10 pr-4`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45 mb-2">
                Mensaje
              </label>
              <textarea
                placeholder="Cuéntanos brevemente tu operación y qué quieres automatizar..."
                className={`${inputBase} p-3.5`}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-[10px] bg-[#2C6FFF] text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
            >
              Enviar mensaje
            </button>

            {/* Success */}
            {sent && (
              <div className="text-center py-4 px-4 rounded-[10px] bg-[#1D9E75]/12 border border-[#1D9E75]/25 text-[#5DCAA5] text-sm">
                Tu mensaje fue enviado correctamente. Te contactaremos pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}