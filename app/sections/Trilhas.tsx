import Link from "next/link";
import Button from "@/components/Button";

const TRILHAS = [
  {
    tag: "TRILHA 01",
    title: "Engenharia de Dados",
    desc: "Pipelines, modelagem, qualidade. Da ingestão ao consumo.",
    color: "var(--coral-500)",
  },
  {
    tag: "TRILHA 02",
    title: "IA aplicada",
    desc: "Casos reais de modelos em produção — sem mistério, com método.",
    color: "var(--teal-500)",
  },
  {
    tag: "TRILHA 03",
    title: "Cloud & Infra",
    desc: "Arquitetura, FinOps, segurança e o que sustenta o resto.",
    color: "var(--pink-500)",
  },
  {
    tag: "WORKSHOPS",
    title: "Mãos no código",
    desc: "Atividades práticas e limitadas. Inscrição separada na sua conta.",
    color: "var(--coral-400)",
  },
];

export default function Trilhas() {
  return (
    <section style={{ padding: "120px 0", background: "var(--purple-800)" }}>
      <div
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 40,
            marginBottom: 56,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--coral-400)",
                marginBottom: 16,
              }}
            >
              O QUE VAI ROLAR
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                lineHeight: 0.95,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "white",
              }}
            >
              Três trilhas,
              <br />
              um sábado inteiro.
            </h2>
          </div>
          <Link href="/programacao" style={{ flexShrink: 0 }}>
            <Button variant="outline-light">
              Programação completa <span>→</span>
            </Button>
          </Link>
        </div>

        {/* Cards grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        >
          {TRILHAS.map((t) => (
            <div
              key={t.tag}
              style={{
                padding: 28,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                minHeight: 240,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontWeight: 700,
                    color: t.color,
                    marginBottom: 16,
                  }}
                >
                  {t.tag}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    lineHeight: 1,
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    color: "white",
                    marginBottom: 10,
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {t.desc}
                </p>
              </div>
              <div
                style={{
                  marginTop: 24,
                  fontSize: 13,
                  fontWeight: 700,
                  color: t.color,
                }}
              >
                Em breve: palestrantes →
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderRadius: 14,
            fontSize: 14,
            padding: "20px 28px",
            background: "rgba(255,145,77,0.08)",
            border: "1px dashed var(--coral-400)",
            color: "var(--coral-300)",
          }}
        >
          <span style={{ fontSize: 24 }}>📌</span>
          <span>
            A programação detalhada — palestrantes, horários e descrições — será
            divulgada conforme as confirmações chegarem.
          </span>
        </div>
      </div>
    </section>
  );
}
