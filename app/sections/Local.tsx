import Link from "next/link";
import Button from "@/components/Button";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Centro+de+Convenções+Cidade+Viva,+João+Pessoa+-+PB";

const INFO = [
  { label: "ENDEREÇO", value: "Centro de Convenções Cidade Viva" },
  { label: "CIDADE", value: "João Pessoa, PB" },
  { label: "QUANDO", value: "Sábado, 01 de agosto de 2026" },
  { label: "HORÁRIO", value: "08h às 17h" },
];

export default function Local() {
  return (
    <section
      id="local"
      className="m-section"
      style={{ padding: "100px 0", background: "var(--purple-900)" }}
    >
      <div
        className="m-pad local-grid"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
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
            Centro de Convenções
            <br />
            Cidade Viva
            <span style={{ color: "var(--coral-500)" }}>.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 36,
              maxWidth: 460,
            }}
          >
            Quatro espaços simultâneos — auditório e três salas — no mesmo
            prédio, em João Pessoa. Tudo a poucos passos de distância.
          </p>

          <dl className="local-info">
            {INFO.map((item) => (
              <div key={item.label}>
                <dt
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "var(--coral-400)",
                    marginBottom: 6,
                  }}
                >
                  {item.label}
                </dt>
                <dd
                  style={{ fontSize: 15, fontWeight: 700, color: "white" }}
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", marginTop: 36 }}
          >
            <Button variant="outline-light">
              Abrir no Google Maps <span>→</span>
            </Button>
          </Link>
        </div>

        <iframe
          className="local-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.315637496453!2d-34.84211092500196!3d-7.089362192913707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd0abb48b547%3A0x48a099811aa725c4!2sCentro%20de%20Conven%C3%A7%C3%B5es%20Cidade%20Viva!5e0!3m2!1spt-BR!2sbr!4v1785351109136!5m2!1spt-BR!2sbr"
          title="Mapa do Centro de Convenções Cidade Viva, João Pessoa"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
