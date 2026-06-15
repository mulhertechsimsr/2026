"use client";

import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";

export default function ProgramacaoClient() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", padding: "120px 0" }}
    >
      <Constellation density={50} color="rgba(255,255,255,0.5)" />
      <div
        className="relative m-pad"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "var(--coral-400)",
            marginBottom: 20,
          }}
        >
          11ª EDIÇÃO · 01 DE AGOSTO · TEMA: DADOS
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 10vw, 120px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "white",
            marginBottom: 24,
          }}
        >
          Programação
          <span style={{ color: "var(--coral-500)" }}>.</span>
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 40,
          }}
        >
          A grade está sendo construída. Divulgamos conforme as palestrantes
          confirmam — fique de olho.
        </p>
        <Link href="https://doity.com.br/mulher-tech-sim-senhor-2026" target="_blank" rel="noopener noreferrer">
          <Button variant="coral" size="lg">
            Garantir minha vaga <span>→</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
