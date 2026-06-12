import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

const TIERS = [
  { name: "DIAMANTE", count: 2, color: "var(--teal-400)", height: 100 },
  { name: "OURO", count: 4, color: "var(--coral-400)", height: 78 },
  { name: "PRATA", count: 6, color: "rgba(166,186,183,1)", height: 60 },
];

function ImgPlaceholder({ height }: { height: number }) {
  return (
    <div
      style={{
        height,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        textTransform: "uppercase" as const,
        background:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.04), rgba(255,255,255,0.04) 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 16px)",
        color: "rgba(255,255,255,0.5)",
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.1em",
      }}
    >
      logo
    </div>
  );
}

export default function Patrocinadores() {
  return (
    <section
      id="patrocinadores"
      style={{ padding: "100px 0", background: "var(--purple-800)" }}
    >
      <div
        className="m-pad"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        <SectionHeader
          eyebrow="QUEM TORNA POSSÍVEL"
          title="Patrocinadores da 11ª edição."
          subtitle="A Mulher Tech Sim Senhor é uma associação sem fins lucrativos. Cada edição existe graças a empresas que acreditam na construção de uma indústria mais plural."
          align="left"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 40, marginBottom: 64 }}>
          {TIERS.map((t) => (
            <div key={t.name}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    fontWeight: 700,
                    color: t.color,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "rgba(255,255,255,0.1)",
                  }}
                />
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                  {t.count} cotas
                </div>
              </div>
              <div
                className="sponsor-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${t.count}, 1fr)`,
                  gap: 16,
                }}
              >
                {Array.from({ length: t.count }).map((_, j) => (
                  <ImgPlaceholder key={j} height={t.height} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Media kit CTA */}
        <div
          className="m-stack"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 32,
            padding: 36,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, rgba(255,145,77,0.15), rgba(129,36,153,0.08))",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "white",
                marginBottom: 8,
              }}
            >
              Sua empresa nesta lista?
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 580,
              }}
            >
              Pedimos para baixar o nosso media kit com cotas, benefícios e
              impacto das edições anteriores.
            </p>
          </div>
          <Button variant="coral">
            Baixar media kit <span>↓</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
