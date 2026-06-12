const BLOCKS = [
  {
    num: "01",
    title: "Carreira de dados, sem cliché",
    desc: "Engenharia, análise, ciência, governança. Conversamos sobre o que dá certo (e o que ninguém conta) em cada caminho.",
  },
  {
    num: "02",
    title: "IA: hype, prática e responsabilidade",
    desc: "Como mulheres em tech estão usando, criando e questionando modelos. Falamos do código ao impacto.",
  },
  {
    num: "03",
    title: "Cloud como base de tudo",
    desc: "Arquitetura, custos, segurança. A infra que segura o resto — e por que ainda somos minoria nesse espaço.",
  },
  {
    num: "04",
    title: "Quem somos nós nesses dados",
    desc: "Painel sobre representatividade, viés e o lugar das mulheres na construção dos sistemas que moldam o mundo.",
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
        className="relative m-pad m-stack"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: 80,
          alignItems: "start",
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
            para onde elas se encontram.
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
