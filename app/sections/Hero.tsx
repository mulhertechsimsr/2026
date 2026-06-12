import Image from "next/image";
import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";
import { edicao2026 } from "@/themes/edicao-2026";

function HeroMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.16em",
          color: "var(--coral-400)",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "white" }}>{value}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden m-section"
      style={{ minHeight: 760, padding: "80px 0 120px" }}
    >
      <Constellation
        density={70}
        color="rgba(255,255,255,0.5)"
        lineColor="rgba(255,255,255,0.06)"
      />

      {/* Coral glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          background: "var(--coral-500)",
          opacity: 0.18,
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: -120,
          left: -120,
          width: 380,
          height: 380,
          background: "var(--pink-500)",
          opacity: 0.15,
          filter: "blur(80px)",
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
          gridTemplateColumns: "1.3fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <div>
          {/* Save the date badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 8px 8px 16px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 9999,
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--coral-500)",
                boxShadow: "0 0 10px var(--coral-500)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 600, color: "white" }}>
              Save the date · 01 de agosto de 2026
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 9999,
                background: "var(--coral-500)",
                color: "white",
                letterSpacing: "0.06em",
              }}
            >
              11ª EDIÇÃO
            </span>
          </div>

          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 700,
              lineHeight: 0.95,
              color: "var(--coral-400)",
              letterSpacing: "-0.04em",
              marginBottom: 12,
            }}
          >
            Mulher Tech Sim Senhor
          </div>

          {/* Title */}
          <h1
            className="m-hero-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 13vw, 180px)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              color: "white",
              marginBottom: 32,
            }}
          >
            DADOS
            <span style={{ color: "var(--coral-500)" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 580,
              marginBottom: 40,
            }}
          >
            Um dia inteiro para falar sobre como dados, IA e cloud estão
            remodelando as carreiras femininas em tecnologia — e como nós
            queremos remodelá-los de volta.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <Link href="/inscricao">
              <Button variant="coral">
                Garantir minha vaga <span>→</span>
              </Button>
            </Link>
            <Link href="/programacao">
              <Button variant="outline-light">Ver programação</Button>
            </Link>
          </div>

          {/* Meta grid */}
          <div
            className="m-meta"
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "0 48px",
              justifyContent: "start",
            }}
          >
            <HeroMeta label="QUANDO" value="01 de agosto, sáb" />
            <HeroMeta label="ONDE" value="[Local — em breve]" />
            <HeroMeta label="DURAÇÃO" value="09h às 19h" />
            <HeroMeta label="FORMATO" value="Presencial + transmissão" />
          </div>
        </div>

        {/* Right column — logo */}
        <div
          className="relative m-hide"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Radial glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "100%",
              aspectRatio: "1",
              maxWidth: 480,
              background:
                "radial-gradient(circle, rgba(95,189,194,0.25) 0%, rgba(255,145,77,0.12) 45%, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <Image
            src={edicao2026.logoSrc}
            alt={edicao2026.logoAlt}
            width={480}
            height={480}
            priority
            className="relative animate-float"
            style={{
              width: "100%",
              maxWidth: 480,
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.45))",
            }}
          />
          {/* Date badge */}
          <div
            className="absolute text-white text-center"
            style={{
              bottom: 0,
              right: -12,
              background: "var(--coral-500)",
              padding: "14px 22px",
              borderRadius: 16,
              lineHeight: 1,
              whiteSpace: "nowrap",
              boxShadow: "0 16px 36px -10px rgba(255,145,77,0.6)",
              transform: "rotate(-4deg)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.12em",
                opacity: 0.9,
                marginBottom: 6,
              }}
            >
              SAVE THE DATE
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 30,
                lineHeight: 0.9,
                fontWeight: 700,
              }}
            >
              01 AGO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
