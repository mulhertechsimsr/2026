interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: Props) {
  const isCenter = align === "center";
  return (
    <div
      style={{
        maxWidth: isCenter ? 720 : 800,
        marginBottom: 56,
        marginLeft: isCenter ? "auto" : undefined,
        marginRight: isCenter ? "auto" : undefined,
        textAlign: isCenter ? "center" : "left",
      }}
    >
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
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 56,
          lineHeight: 0.95,
          fontWeight: 700,
          color: "white",
          letterSpacing: "-0.04em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 20,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 640,
            marginLeft: isCenter ? "auto" : undefined,
            marginRight: isCenter ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
