import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

interface Logo {
  nome: string;
  arquivo: string;
  /** Arte só disponível em traço branco — precisa ser invertida no tile claro */
  negativa?: boolean;
}

/** Marcas em `public/patrocinadores/`, em ordem alfabética — sem hierarquia de cotas. */
const LOGOS: Logo[] = [
  { nome: "Bybit", arquivo: "bybit.svg" },
  { nome: "cloud++", arquivo: "cloud-plus-plus.png" },
  { nome: "FIAP", arquivo: "fiap.svg" },
  { nome: "GFT Technologies", arquivo: "gft-technologies.png" },
  { nome: "Governo da Paraíba", arquivo: "governo-paraiba.png" },
  { nome: "Growdev", arquivo: "growdev.png" },
  // Só temos o arquivo em negativo (traço branco) — invertido via CSS
  { nome: "Ilha Tech", arquivo: "ilha-tech.svg", negativa: true },
  { nome: "São Braz", arquivo: "sao-braz.svg" },
  { nome: "Solana", arquivo: "solana.svg" },
  { nome: "Superteam Brasil", arquivo: "superteam-brasil.svg" },
  { nome: "Três Bê Delas", arquivo: "tres-be-delas.png" },
];

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

        <ul className="sponsor-grid" style={{ listStyle: "none" }}>
          {LOGOS.map((logo) => (
            <li key={logo.arquivo} className="sponsor-tile">
              {/* <img> puro: os arquivos são SVG/PNG de marca, servidos como
                  vieram — o otimizador do next/image não aceita SVG sem
                  liberar `dangerouslyAllowSVG` no config. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/patrocinadores/${logo.arquivo}`}
                alt={logo.nome}
                loading="lazy"
                decoding="async"
                className={logo.negativa ? "is-negativa" : undefined}
              />
            </li>
          ))}
        </ul>

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
            <Link href="https://drive.google.com/file/d/1HIcLq2tiZz3xSaf41J2XIel-MwLSqRnx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="coral">
                Baixar media kit <span>↓</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
