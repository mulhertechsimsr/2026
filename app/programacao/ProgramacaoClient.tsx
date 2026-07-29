"use client";

import { Fragment, useState, type CSSProperties } from "react";
import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";
import {
  PROGRAMACAO,
  ROOMS,
  ROOM_BY_KEY,
  type RoomKey,
  type Session,
  type Slot,
} from "@/lib/programacao";

type Filter = RoomKey | "todos";

const INSCRICAO_URL = "https://doity.com.br/mulher-tech-sim-senhor-2026";

/**
 * Aplica o filtro de sala. Um grupo pode degenerar: filtrando só pela sala da
 * atividade contínua sobram zero faixas, e ele vira um slot comum; filtrando
 * pelo auditório a atividade some e as faixas voltam a ser slots independentes.
 */
function filterSlots(slots: Slot[], filtro: Filter): Slot[] {
  if (filtro === "todos") return slots;
  const keep = (s: Session) => s.room === filtro;

  return slots.flatMap((slot): Slot[] => {
    if (slot.type === "break") return [slot];

    if (slot.type === "sessions") {
      const sessions = slot.sessions.filter(keep);
      return sessions.length ? [{ ...slot, sessions }] : [];
    }

    const spanning = slot.spanning.filter(keep);
    const rows = slot.rows
      .map((row) => ({ ...row, sessions: row.sessions.filter(keep) }))
      .filter((row) => row.sessions.length > 0);

    if (!rows.length) {
      return spanning.length
        ? [
            {
              type: "sessions",
              start: slot.start,
              end: slot.end,
              sessions: spanning,
            },
          ]
        : [];
    }
    if (!spanning.length) {
      return rows.map((row) => ({ type: "sessions" as const, ...row }));
    }
    return [{ ...slot, spanning, rows }];
  });
}

export default function ProgramacaoClient() {
  const [filtro, setFiltro] = useState<Filter>("todos");

  const slots = filterSlots(PROGRAMACAO, filtro);

  return (
    <>
      {/* ===== Cabeçalho ===== */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "120px 0 72px", background: "var(--purple-900)" }}
      >
        <Constellation density={50} color="rgba(255,255,255,0.5)" />
        <div
          className="relative m-pad"
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
            11ª EDIÇÃO · 01 DE AGOSTO · TEMA: DADOS
          </div>
          <h1
            className="m-hero-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 10vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "white",
              marginBottom: 24,
            }}
          >
            Programação
            <span style={{ color: "var(--coral-500)" }}>.</span>
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Um sábado inteiro, quatro espaços simultâneos, 12 sessões e 14
            palestrantes sobre dados, IA, cloud e carreira. Escolha seu caminho.
          </p>
        </div>
      </section>

      {/* ===== Grade ===== */}
      <section
        style={{ padding: "0 0 120px", background: "var(--purple-900)" }}
      >
        <div
          className="m-pad"
          style={{
            maxWidth: 1240,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          {/* Filtro por espaço */}
          <div
            className="prog-filters"
            style={{ marginBottom: 48 }}
          >
            <span
              className="prog-filters-label"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "rgba(255,255,255,0.4)",
                marginRight: 6,
              }}
            >
              Filtrar
            </span>
            <FilterChip
              label="Tudo"
              color="#ffffff"
              active={filtro === "todos"}
              onClick={() => setFiltro("todos")}
            />
            {ROOMS.map((room) => (
              <FilterChip
                key={room.key}
                label={room.full}
                color={room.color}
                active={filtro === room.key}
                onClick={() => setFiltro(room.key)}
              />
            ))}
          </div>

          {/* Linha do tempo */}
          <div
            className="prog-timeline"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {slots.map((slot) => {
              if (slot.type === "break")
                return <BreakRow key={`${slot.start}-break`} {...slot} />;
              if (slot.type === "group")
                return <GroupBlock key={`${slot.start}-group`} slot={slot} />;

              return (
                <div className="prog-slot" key={slot.start}>
                  <TimeLabel start={slot.start} end={slot.end} />
                  <div className="prog-cards" data-cols={slot.sessions.length}>
                    {slot.sessions.map((session) => (
                      <SessionCard
                        key={`${slot.start}-${session.room}`}
                        session={session}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Aviso + CTA */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 16,
              borderRadius: 14,
              fontSize: 14,
              lineHeight: 1.5,
              padding: "20px 28px",
              background: "rgba(255,145,77,0.08)",
              border: "1px dashed var(--coral-400)",
              color: "var(--coral-300)",
            }}
          >
            <span style={{ fontSize: 24 }}>📌</span>
            <span>
              Programação sujeita a alterações. Workshops têm vagas limitadas —
              a inscrição é feita separadamente no dia do evento.
            </span>
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link
              href={INSCRICAO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="coral" size="lg">
                Garantir minha vaga <span>→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({
  label,
  color,
  active,
  onClick,
}: {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 16px",
        borderRadius: 9999,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        transition: "background 0.15s ease, border-color 0.15s ease",
        background: active ? `color-mix(in srgb, ${color} 16%, transparent)` : "transparent",
        border: `1.5px solid ${active ? color : "rgba(255,255,255,0.18)"}`,
        color: active ? color : "rgba(255,255,255,0.6)",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
        }}
      />
      {label}
    </button>
  );
}

function TimeLabel({
  start,
  end,
  muted = false,
  style,
}: {
  start: string;
  end: string;
  muted?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div className="prog-time" style={style}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: muted ? "rgba(255,255,255,0.45)" : "white",
        }}
      >
        {start}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: muted ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.35)",
        }}
      >
        até {end}
      </span>
    </div>
  );
}

/**
 * Bloco com atividade contínua: no desktop é um grid onde o card contínuo ocupa
 * `grid-row: 1 / span N` ao lado das faixas. No mobile o CSS troca para flex e
 * a ordem do DOM manda — por isso o card contínuo vem primeiro, com seu próprio
 * horário, já que ali ele perde a referência visual da coluna.
 */
function GroupBlock({ slot }: { slot: Extract<Slot, { type: "group" }> }) {
  const cols = Math.max(...slot.rows.map((r) => r.sessions.length));

  return (
    <div
      className="prog-group"
      style={{
        gridTemplateColumns: `var(--prog-time-col) repeat(${
          cols + slot.spanning.length
        }, minmax(0, 1fr))`,
      }}
    >
      {slot.spanning.map((session, i) => (
        <div
          className="prog-span"
          key={`span-${session.room}`}
          style={{
            gridRow: `1 / span ${slot.rows.length}`,
            gridColumn: cols + 2 + i,
          }}
        >
          <TimeLabel start={slot.start} end={slot.end} />
          <SessionCard session={session} />
        </div>
      ))}

      {slot.rows.map((row, rowIndex) => (
        <Fragment key={row.start}>
          <TimeLabel
            start={row.start}
            end={row.end}
            style={{ gridRow: rowIndex + 1, gridColumn: 1 }}
          />
          {row.sessions.map((session, i) => (
            <SessionCard
              key={`${row.start}-${session.room}`}
              session={session}
              style={{ gridRow: rowIndex + 1, gridColumn: 2 + i }}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
}

function SessionCard({
  session,
  style,
}: {
  session: Session;
  style?: CSSProperties;
}) {
  const room = ROOM_BY_KEY[session.room];

  return (
    <article
      className="prog-card"
      style={{ "--room": room.color, ...style } as CSSProperties}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          fontWeight: 700,
          color: room.color,
        }}
      >
        <span>{room.label}</span>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
        <span style={{ color: "rgba(255,255,255,0.5)" }}>{session.kind}</span>
        {session.note && (
          <span
            style={{
              padding: "3px 9px",
              borderRadius: 9999,
              letterSpacing: "0.1em",
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {session.note}
          </span>
        )}
      </div>

      <h3 className="prog-card-title">{session.title}</h3>

      {session.speakers && (
        <p
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {session.speakers}
        </p>
      )}

      {session.cta && (
        <Link
          className="prog-card-cta"
          href={session.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor: room.color, color: room.color }}
        >
          {session.cta.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}

function BreakRow({
  start,
  end,
  label,
  icon,
}: {
  start: string;
  end: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="prog-slot">
      <TimeLabel start={start} end={end} muted />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 24px",
          borderRadius: 20,
          border: "1px dashed rgba(255,255,255,0.16)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span style={{ fontSize: 18 }}>{icon}</span>
        {label}
      </div>
    </div>
  );
}
