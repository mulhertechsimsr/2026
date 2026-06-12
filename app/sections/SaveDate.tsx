"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
}

function useCountdown(target: string): Countdown | null {
  const [value, setValue] = useState<Countdown | null>(null);

  useEffect(() => {
    const calc = (): Countdown => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      const totalMinutes = Math.floor(diff / 60_000);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const days = Math.floor(totalHours / 24);
      return { days, hours, minutes };
    };
    setValue(calc());
    const id = setInterval(() => setValue(calc()), 60_000);
    return () => clearInterval(id);
  }, [target]);

  return value;
}

function CountUnit({ value, label }: { value: number | null; label: string }) {
  const display = value == null ? "—" : String(value).padStart(2, "0");
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 72,
          lineHeight: 1,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "white",
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.5)",
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function SaveDate() {
  const countdown = useCountdown("2026-08-01");

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--coral-500)", padding: "100px 0", color: "white" }}
    >
      {/* Glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -100,
          left: -100,
          width: 320,
          height: 320,
          background: "var(--pink-500)",
          opacity: 0.4,
          filter: "blur(60px)",
        }}
      />

      <div
        className="relative m-pad m-stack"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 16,
            }}
          >
            FALTAM POUCAS SEMANAS
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 8vw, 96px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "white",
              marginBottom: 24,
            }}
          >
            01
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.58em",
              }}
            >
              {" "}de{" "}
            </span>
            agosto.
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.9)",
              maxWidth: 540,
              marginBottom: 32,
            }}
          >
            As inscrições para a 11ª edição abrem em junho. As vagas para
            workshops são limitadas e os ingressos das edições anteriores
            esgotaram em até 72h.
          </p>
          <Link href="/inscricao">
            <Button variant="white">Quero ser avisada quando abrir</Button>
          </Link>
        </div>

        {/* Countdown */}
        <div
          className="m-full"
          style={{
            background: "var(--purple-800)",
            padding: "40px 48px",
            borderRadius: 24,
            minWidth: 340,
            boxShadow: "0 20px 60px -20px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--coral-400)",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            FALTAM
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr auto 1fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CountUnit value={countdown?.days ?? null} label="dias" />
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1,
                paddingBottom: 20,
              }}
            >
              :
            </div>
            <CountUnit value={countdown?.hours ?? null} label="horas" />
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1,
                paddingBottom: 20,
              }}
            >
              :
            </div>
            <CountUnit value={countdown?.minutes ?? null} label="min" />
          </div>
        </div>
      </div>
    </section>
  );
}
