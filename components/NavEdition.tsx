"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";
import Button from "./Button";
import { INSTITUCIONAL_URL } from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "A Edição" },
  { href: "/programacao", label: "Programação" },
  { href: "/#local", label: "Local" },
  { href: "/#patrocinadores", label: "Patrocinadores" },
];

export default function NavEdition() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-[12px]"
      style={{
        background: "rgba(13,17,89,0.85)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 32,
          paddingRight: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ outline: "none" }}>
          <Wordmark />
        </Link>

        {/* Desktop links — hidden on mobile via className */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:bg-white/[0.08] transition-colors"
              style={{
                padding: "10px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "rgba(255,255,255,0.85)",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={INSTITUCIONAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/[0.08] transition-colors"
            style={{
              padding: "10px 14px",
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            ← Institucional
          </a>
          <Link href="/inscricao" style={{ marginLeft: 12 }}>
            <Button variant="coral" size="sm">
              Inscreva-se
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          style={{
            padding: 8,
            borderRadius: 8,
            background: "transparent",
            border: "none",
            color: "rgba(255,255,255,0.8)",
            cursor: "pointer",
          }}
        >
          {open ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "8px 24px 16px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:bg-white/[0.08] transition-colors"
              style={{
                padding: "10px 12px",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={INSTITUCIONAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 12px",
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
            }}
          >
            ← Institucional
          </a>
          <div style={{ marginTop: 8 }}>
            <Button variant="coral" size="sm" onClick={() => setOpen(false)} style={{ width: "100%", justifyContent: "center" }}>
              Inscreva-se
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
