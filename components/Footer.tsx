import Link from "next/link";
import Constellation from "./Constellation";
import Wordmark from "./Wordmark";

const COMMUNITY_LINKS = ["Sobre", "História", "Como participar", "Diretoria"];
const EVENT_LINKS = [
  { label: "11ª Edição", href: "/" },
  { label: "Programação", href: "/programacao" },
  { label: "Inscrição", href: "/inscricao" },
  { label: "Patrocinadores", href: "/#patrocinadores" },
];
const CONTACT_LINKS = [
  { label: "mulhertechsimsr@gmail.com", href: "mailto:mulhertechsimsr@gmail.com" },
  { label: "João Pessoa, PB", href: "#" },
  { label: "@mulhertechsimsr", href: "https://www.instagram.com/mulhertechsimsr/" },
  { label: "Parcerias", href: "mailto:mulhertechsimsr@gmail.com" },
];
const SOCIALS = [
  { label: "Instagram", abbr: "Ins", href: "https://www.instagram.com/mulhertechsimsr/" },
  { label: "LinkedIn", abbr: "in", href: "https://www.linkedin.com/company/mulher-tech-sim-senhor/" },
  { label: "Facebook", abbr: "fb", href: "https://www.facebook.com/wtmjp/" },
  { label: "Spotify", abbr: "♫", href: "https://open.spotify.com/playlist/1uE56UMEpZ4rAEV7paMPyx" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--purple-900)", color: "white" }}
    >
      <Constellation density={25} />
      <div
        className="relative m-pad"
        style={{
          maxWidth: 1240,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 80,
          paddingBottom: 40,
        }}
      >
        <div className="footer-grid">
          <div>
            <Wordmark chip />
            <p
              style={{
                marginTop: 20,
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.65)",
                maxWidth: 320,
              }}
            >
              Associação sem fins lucrativos sediada em João Pessoa (PB),
              dedicada a conectar, formar e celebrar mulheres na tecnologia.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    height: 38,
                    padding: "0 12px",
                    borderRadius: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.08)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "white",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Comunidade"
            links={COMMUNITY_LINKS.map((l) => ({ label: l, href: "#" }))}
          />
          <FooterCol title="Evento" links={EVENT_LINKS} />
          <FooterCol title="Contato" links={CONTACT_LINKS} />
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            flexWrap: "wrap" as const,
          }}
        >
          <span>
            © 2026 Mulher Tech Sim Senhor · Associação sem fins lucrativos
          </span>
          <span>feito com 🧡 pela comunidade</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "var(--coral-400)",
          marginBottom: 18,
        }}
      >
        {title}
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
