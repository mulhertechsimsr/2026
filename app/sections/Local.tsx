import Constellation from "@/components/Constellation";

function LocalDetail({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        paddingBottom: 14,
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(166,186,183,1)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 17, fontWeight: 600, color: "white" }}>{value}</div>
    </div>
  );
}

export default function Local() {
  return (
    <section
      id="local"
      style={{ padding: "100px 0", background: "var(--purple-900)" }}
    >
      <div
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
              color: "var(--coral-400)",
              marginBottom: 16,
            }}
          >
            ONDE A GENTE SE ENCONTRA
          </div>
          <h2
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
            Local em definição.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
            }}
          >
            Estamos fechando o espaço para receber as participantes presenciais
            da 11ª edição. O evento acontece em João Pessoa (PB), com
            acessibilidade e fácil acesso.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <LocalDetail label="CIDADE" value="João Pessoa, PB" />
            <LocalDetail label="ENDEREÇO" value="[A ser anunciado]" />
            <LocalDetail label="CAPACIDADE PRESENCIAL" value="[A definir]" />
            <LocalDetail label="TRANSMISSÃO ONLINE" value="Para todas as inscritas" />
          </div>
        </div>

        {/* Map placeholder */}
        <div
          className="relative overflow-hidden"
          style={{
            aspectRatio: "4/3",
            borderRadius: 24,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Constellation density={40} />
          <div className="relative" style={{ textAlign: "center", padding: 40 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>📍</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                color: "white",
                marginBottom: 8,
              }}
            >
              João Pessoa
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.1em",
                color: "var(--coral-400)",
              }}
            >
              LOCAL A SER ANUNCIADO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
