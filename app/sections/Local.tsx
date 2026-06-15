export default function Local() {
  return (
    <section
      id="local"
      style={{ padding: "100px 0", background: "var(--purple-900)" }}
    >
      <div
        className="m-pad"
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
          ONDE A GENTE SE ENCONTRA
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
            marginBottom: 20,
          }}
        >
          Em breve.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 480,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          João Pessoa, PB · Local a ser anunciado.
        </p>
      </div>
    </section>
  );
}
