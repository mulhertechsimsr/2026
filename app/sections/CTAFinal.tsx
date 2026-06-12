import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";

export default function CTAFinal() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: "120px 0", background: "var(--purple-900)" }}
    >
      <Constellation density={60} color="rgba(255,255,255,0.5)" />
      <div
        className="relative"
        data-m-pad
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
            marginBottom: 24,
          }}
        >
          NOS VEMOS LÁ?
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 120px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "white",
            marginBottom: 32,
          }}
        >
          A 11ª edição
          <br />
          <span style={{ color: "var(--coral-500)" }}>quer você junto.</span>
        </h2>
        <p
          style={{
            fontSize: 19,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 580,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 40,
          }}
        >
          Inscrição no evento + workshops à sua escolha. Vagas limitadas.
        </p>
        <Link href="/inscricao">
          <Button variant="coral" size="lg">
            Quero minha inscrição <span>→</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
