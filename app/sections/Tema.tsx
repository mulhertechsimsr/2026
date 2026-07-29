const BLOCKS = [
  {
    num: "01",
    title: "Onde o dado vira trabalho",
    desc: "Engenharia de dados com ferramentas open source, IA generativa nos pipelines e algoritmos resolvendo problemas biológicos. Do primeiro projeto ao portfólio.",
  },
  {
    num: "02",
    title: "IA como colega, não como ameaça",
    desc: "Copilot em todos os fluxos de trabalho, IA derrubando o mito da substituição no QA e a nuvem que sustenta os modelos. Ferramenta, com método.",
  },
  {
    num: "03",
    title: "O custo humano da automação",
    desc: "Empatia sintética redesenhando a essência humana e o Overclock Humano: ser substituível pela IA e, ao mesmo tempo, exausta pelas metas.",
  },
  {
    num: "04",
    title: "Quem constrói os sistemas",
    desc: "Data Feminism reescrevendo narrativas, protagonismo feminino na Web3, investigação digital e uma mesa redonda sobre representatividade.",
  },
];

function ThemeBlock({ num, title, desc }: (typeof BLOCKS)[number]) {
  return (
    <div
      style={{
        padding: "28px 32px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 18,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: 24,
        alignItems: "start",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 36,
          lineHeight: 1,
          fontWeight: 700,
          color: "var(--coral-500)",
        }}
      >
        {num}
      </div>
      <div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "white",
            marginBottom: 8,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function Tema() {
  return (
    <section
      className="relative"
      style={{
        padding: "120px 0",
        background: "linear-gradient(180deg, var(--purple-900) 0%, var(--purple-800) 100%)",
      }}
    >
      <div
        className="relative m-pad tema-grid"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {/* Sticky left */}
        <div className="sticky" style={{ top: 100 }}>
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
            POR QUE DADOS
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
              marginBottom: 24,
            }}
          >
            O fio condutor de 2026.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Dados são o substrato — IA e cloud são a forma. Esta edição olha
            para onde elas se encontram: da bioinformática ao Data Feminism, do
            Copilot à Web3.
          </p>
        </div>

        {/* Blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {BLOCKS.map((b) => (
            <ThemeBlock key={b.num} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
