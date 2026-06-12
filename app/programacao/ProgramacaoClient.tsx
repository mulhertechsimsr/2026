"use client";

import { useState } from "react";
import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";

/* ===== Data ===== */
type TrackId = "todas" | "dados" | "ia" | "cloud" | "workshop";

const TRACKS: { id: TrackId; label: string; color: string }[] = [
  { id: "todas", label: "Todas", color: "var(--coral-500)" },
  { id: "dados", label: "Eng. de Dados", color: "var(--coral-500)" },
  { id: "ia", label: "IA", color: "var(--teal-500)" },
  { id: "cloud", label: "Cloud & Infra", color: "var(--pink-500)" },
  { id: "workshop", label: "Workshops", color: "var(--coral-400)" },
];

type SessionType =
  | "credencial"
  | "abertura"
  | "keynote"
  | "talk"
  | "workshop"
  | "painel"
  | "intervalo"
  | "almoco"
  | "encerramento"
  | "festa";

interface Session {
  time: string;
  duration: string;
  type: SessionType;
  title: string;
  desc: string;
  speaker?: string;
  tags?: TrackId[];
  slots?: number;
  filled?: number;
}

const SCHEDULE: Session[] = [
  {
    time: "08:30",
    duration: "01:00",
    type: "credencial",
    title: "Credenciamento + café da manhã",
    desc: "Chega cedo. Conhece quem está chegando.",
  },
  {
    time: "09:30",
    duration: "00:30",
    type: "abertura",
    title: "Abertura · 11ª edição",
    desc: "Boas-vindas, contexto da associação, recados.",
    speaker: "Diretoria MTSS",
  },
  {
    time: "10:00",
    duration: "00:45",
    type: "keynote",
    title: "Keynote de abertura · [Tema]",
    desc: "[Descrição em breve.]",
    speaker: "[Palestrante a confirmar]",
    tags: ["dados", "ia"],
  },
  {
    time: "10:45",
    duration: "00:30",
    type: "intervalo",
    title: "Coffee break · networking guiado",
    desc: "Atividade rápida para te conectar com outras 5 pessoas.",
  },
  {
    time: "11:15",
    duration: "00:40",
    type: "talk",
    title: "[Palestra · Trilha Eng. Dados]",
    desc: "[Descrição em breve.]",
    speaker: "[A confirmar]",
    tags: ["dados"],
  },
  {
    time: "11:15",
    duration: "00:40",
    type: "talk",
    title: "[Palestra · Trilha IA]",
    desc: "[Descrição em breve.]",
    speaker: "[A confirmar]",
    tags: ["ia"],
  },
  {
    time: "11:15",
    duration: "00:40",
    type: "talk",
    title: "[Palestra · Trilha Cloud]",
    desc: "[Descrição em breve.]",
    speaker: "[A confirmar]",
    tags: ["cloud"],
  },
  {
    time: "12:00",
    duration: "01:30",
    type: "almoco",
    title: "Almoço",
    desc: "Almoço incluído na inscrição. Espaço de descompressão aberto.",
  },
  {
    time: "13:30",
    duration: "02:00",
    type: "workshop",
    title: "Workshop · [Tema prático em Python para dados]",
    desc: "Vagas limitadas. Trazer notebook. Inscrição separada.",
    speaker: "[Facilitadora a confirmar]",
    tags: ["workshop", "dados"],
    slots: 30,
    filled: 0,
  },
  {
    time: "13:30",
    duration: "02:00",
    type: "workshop",
    title: "Workshop · [Construindo com LLMs]",
    desc: "Vagas limitadas. Trazer notebook. Inscrição separada.",
    speaker: "[Facilitadora a confirmar]",
    tags: ["workshop", "ia"],
    slots: 25,
    filled: 0,
  },
  {
    time: "13:30",
    duration: "02:00",
    type: "workshop",
    title: "Workshop · [Arquitetura em AWS]",
    desc: "Vagas limitadas. Trazer notebook. Inscrição separada.",
    speaker: "[Facilitadora a confirmar]",
    tags: ["workshop", "cloud"],
    slots: 25,
    filled: 0,
  },
  {
    time: "15:30",
    duration: "00:30",
    type: "intervalo",
    title: "Coffee break",
    desc: "Patrocinado por [Empresa].",
  },
  {
    time: "16:00",
    duration: "01:00",
    type: "painel",
    title: "Painel · Mulheres construindo IA no Brasil",
    desc: "Quatro convidadas, conversa aberta com a plateia.",
    speaker: "[Convidadas a confirmar]",
    tags: ["ia"],
  },
  {
    time: "17:00",
    duration: "00:45",
    type: "keynote",
    title: "Keynote de encerramento",
    desc: "[Descrição em breve.]",
    speaker: "[Palestrante a confirmar]",
  },
  {
    time: "17:45",
    duration: "00:30",
    type: "encerramento",
    title: "Encerramento + foto coletiva",
    desc: "A foto que vai pra rede social toda.",
  },
  {
    time: "18:15",
    duration: "00:45",
    type: "festa",
    title: "Happy hour da comunidade",
    desc: "Cerveja, suco, conversa boa. No mesmo espaço.",
  },
];

const SYSTEM_TYPES: SessionType[] = [
  "credencial",
  "abertura",
  "encerramento",
  "intervalo",
  "almoco",
  "festa",
];

const TYPE_COLOR: Record<SessionType, string> = {
  credencial: "rgba(166,186,183,1)",
  abertura: "var(--coral-500)",
  keynote: "var(--coral-500)",
  talk: "var(--teal-500)",
  workshop: "var(--pink-500)",
  painel: "var(--teal-400)",
  intervalo: "rgba(166,186,183,1)",
  almoco: "rgba(166,186,183,1)",
  encerramento: "var(--coral-500)",
  festa: "var(--pink-400)",
};

/* ===== Schedule item ===== */
function ScheduleItem({ item }: { item: Session }) {
  const accent = TYPE_COLOR[item.type];
  const isBreak = SYSTEM_TYPES.includes(item.type);
  return (
    <div
      className="rounded-[14px] grid gap-6 items-start"
      style={{
        padding: "20px 24px",
        background: isBreak ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeft: `3px solid ${accent}`,
        gridTemplateColumns: "1fr auto",
      }}
    >
      <div>
        <div className="flex flex-wrap gap-2 items-center mb-2">
          <span
            className="text-[10px] uppercase font-bold"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.16em",
              color: accent,
            }}
          >
            {item.type}
          </span>
          <span className="text-[11px] text-white/40">· {item.duration}</span>
          {item.slots != null && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase"
              style={{
                background: "rgba(255,145,77,0.15)",
                color: "var(--coral-500)",
                letterSpacing: "0.06em",
              }}
            >
              {item.slots} vagas
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-1.5 leading-[1.3]">
          {item.title}
        </h3>
        <p className="text-sm leading-[1.5] text-white/60">
          {item.desc}
        </p>
        {item.speaker && (
          <div className="flex items-center gap-2.5 mt-2.5">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              👤
            </div>
            <span className="text-[13px] text-white/70 font-medium">
              {item.speaker}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===== Schedule groups ===== */
function ScheduleGroups({ items }: { items: Session[] }) {
  // Group by time
  const groups: { time: string; sessions: Session[] }[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (!last || last.time !== item.time) {
      groups.push({ time: item.time, sessions: [item] });
    } else {
      last.sessions.push(item);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {groups.map((g, gi) => (
        <div
          key={gi}
          className="py-5"
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr",
            gap: 32,
            borderTop:
              gi > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
          }}
        >
          {/* Time — sticky */}
          <div className="sticky top-[80px] self-start">
            <div
              className="text-[36px] text-white leading-none font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {g.time}
            </div>
          </div>

          {/* Sessions */}
          <div className="flex flex-col gap-3">
            {g.sessions.length > 1 && (
              <div
                className="text-xs uppercase font-bold mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.16em",
                  color: "var(--coral-400)",
                }}
              >
                ↓ {g.sessions.length} sessões em paralelo
              </div>
            )}
            {/* Mobile: stack; Desktop: grid for parallel */}
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns:
                  g.sessions.length > 1
                    ? `repeat(${Math.min(g.sessions.length, 3)}, 1fr)`
                    : "1fr",
              }}
            >
              {g.sessions.map((s, i) => (
                <ScheduleItem key={i} item={s} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ===== Main component ===== */
export default function ProgramacaoClient() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("todas");

  const filtered =
    activeTrack === "todas"
      ? SCHEDULE
      : SCHEDULE.filter(
          (s) =>
            (s.tags ?? []).includes(activeTrack) ||
            SYSTEM_TYPES.includes(s.type)
        );

  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "80px 0 48px" }}
      >
        <Constellation density={50} color="rgba(255,255,255,0.5)" />
        <div
          className="relative m-pad"
          style={{ maxWidth: 1240, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}
        >
          <div
            className="text-xs uppercase mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.16em",
              color: "var(--coral-400)",
            }}
          >
            11ª EDIÇÃO · 01 DE AGOSTO · TEMA: DADOS
          </div>
          <h1
            className="leading-[0.9] text-white mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 8vw, 96px)",
              letterSpacing: "-0.04em",
            }}
          >
            Programação
            <span style={{ color: "var(--coral-500)" }}>.</span>
          </h1>
          <p className="text-[19px] leading-[1.5] text-white/70 max-w-[620px]">
            Um dia, três trilhas em paralelo, workshops práticos com vagas
            limitadas. A grade está sendo construída conforme palestrantes
            confirmam.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {TRACKS.map((t) => {
              const active = activeTrack === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTrack(t.id)}
                  className="px-[18px] py-[10px] rounded-full font-semibold text-sm transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: active ? t.color : "transparent",
                    color: active ? "white" : "rgba(255,255,255,0.8)",
                    border: active
                      ? "1px solid transparent"
                      : "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* TBD notice */}
          <div
            className="inline-flex items-center gap-3 text-sm rounded-[12px] mt-6"
            style={{
              padding: "14px 20px",
              background: "rgba(255,145,77,0.1)",
              border: "1px solid rgba(255,145,77,0.3)",
              color: "var(--coral-300)",
            }}
          >
            <span>⚡</span>
            <span>
              Conteúdo em construção. Salve a página — atualizamos conforme as
              confirmações chegam.
            </span>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section style={{ padding: "40px 0 120px" }}>
        <div className="m-pad" style={{ maxWidth: 900, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>
          <ScheduleGroups items={filtered} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="text-center"
        style={{ padding: "80px 0", background: "var(--coral-500)" }}
      >
        <div style={{ maxWidth: 1240, marginLeft: "auto", marginRight: "auto", paddingLeft: 32, paddingRight: 32 }}>
          <h2
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.04em",
            }}
          >
            Workshops têm vagas limitadas.
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Inscrição no evento garante presença nas trilhas. Workshops são
            escolhidos no ato da inscrição.
          </p>
          <Link href="/inscricao">
            <Button variant="white">
              Inscrever agora <span>→</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
