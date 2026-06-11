import Logo from "./Logo";

interface Props {
  chip?: boolean;
  editionLabel?: string;
}

export default function Wordmark({
  chip = false,
  editionLabel = "11ª Edição · Dados",
}: Props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Logo size={44} chip={chip} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          Mulher Tech
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.6)",
            marginTop: 4,
          }}
        >
          {editionLabel}
        </span>
      </div>
    </div>
  );
}
