import Link from "next/link";
import Button from "@/components/Button";

const TRILHAS = [
  {
    tag: "TRILHA 01",
    title: "Dados & Engenharia",
    desc: "Do pipeline ao portfólio: IA generativa na engenharia de dados, bioinformática e narrativas reescritas com Data Feminism.",
    speakers: "Bianca Amorim · Geovana Bezerra · Taty e Amanda Calixto",
    color: "var(--coral-500)",
  },
  {
    tag: "TRILHA 02",
    title: "IA na prática",
    desc: "A nuvem que sustenta os modelos, Copilot no fluxo de trabalho, IA como aliada de QA e o design da empatia sintética.",
    speakers: "Simara Conceição · Sulamita Dantas · Dayane Felix · Rebecca Tatini",
    color: "var(--teal-500)",
  },
  {
    tag: "TRILHA 03",
    title: "Carreira, Web3 & Segurança",
    desc: "Estratégia para o mercado global, protagonismo feminino na Web3, investigação digital e exaustão sob pressão de metas.",
    speakers:
      "Maria Luiza Lyra e Izabelle Amaro · Ana Clara Fabião · Nicolle Garrido · Lorraine Oliveira",
    color: "var(--pink-500)",
  },
  {
    tag: "MÃO NA MASSA",
    title: "Workshop & Code Game",
    desc: "Workshop de engenharia de dados com ferramentas open source e o Code Game rolando direto das 10:10 ao almoço.",
    speakers: "Gisele Fonseca · Vagas limitadas, inscrição à parte",
    color: "var(--coral-400)",
  },
];

export default function Trilhas() {
  return (
    <section style={{ padding: "120px 0", background: "var(--purple-800)" }}>
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
        <div className="trilhas-header">
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
              className="m-h2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                lineHeight: 0.95,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "white",
              }}
            >
              Quatro espaços,
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
        <div className="trilhas-grid">
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
                  paddingTop: 16,
                  borderTop: `1px solid ${t.color}`,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {t.speakers}
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
            São 12 sessões e 14 palestrantes distribuídas em quatro espaços
            simultâneos. Workshop e Code Game têm vagas limitadas e inscrição
            separada da inscrição no evento.
          </span>
        </div>
      </div>
    </section>
  );
}
