import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

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

        {/* Em breve */}
        {/* <div
          style={{
            padding: "48px 40px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px dashed rgba(255,255,255,0.12)",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 12,
            }}
          >
            EM BREVE
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>
            Os patrocinadores da 11ª edição serão anunciados em breve.
          </p>
        </div> */}

        {/* Media kit CTA */}
        <div
          className="mediakit-grid"
          style={{
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
              Quer sua empresa nessa lista?
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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="coral">
              Baixar media kit <span>↓</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
