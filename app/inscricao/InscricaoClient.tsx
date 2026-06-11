"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Constellation from "@/components/Constellation";
import Button from "@/components/Button";

/* ===== Workshop data ===== */
interface Workshop {
  id: string;
  track: string;
  trackColor: string;
  title: string;
  facilitator: string;
  desc: string;
  duration: string;
  slots: number;
  filled: number;
  level: string;
  full?: boolean;
  almostFull?: boolean;
}

const WORKSHOPS: Workshop[] = [
  {
    id: "py-dados",
    track: "ENG. DE DADOS",
    trackColor: "var(--coral-500)",
    title: "Construindo pipelines em Python",
    facilitator: "[Facilitadora a confirmar]",
    desc: "Workshop prático: do CSV ao data lake. Ingestão, transformação e qualidade de dados. Traga seu notebook.",
    duration: "2h",
    slots: 30,
    filled: 18,
    level: "Intermediário",
  },
  {
    id: "llm",
    track: "IA",
    trackColor: "var(--teal-500)",
    title: "Construindo aplicações com LLMs",
    facilitator: "[Facilitadora a confirmar]",
    desc: "Da prompt à API. Construa um agente simples com modelos abertos. Sem mistério, com método.",
    duration: "2h",
    slots: 25,
    filled: 22,
    level: "Intermediário",
    almostFull: true,
  },
  {
    id: "aws",
    track: "CLOUD",
    trackColor: "var(--pink-500)",
    title: "Arquitetando na AWS",
    facilitator: "[Facilitadora a confirmar]",
    desc: "Conceitos de arquitetura, custos e segurança. Vamos desenhar uma aplicação real do zero.",
    duration: "2h",
    slots: 25,
    filled: 9,
    level: "Iniciante",
  },
  {
    id: "ml-prod",
    track: "IA",
    trackColor: "var(--teal-500)",
    title: "Levando ML para produção",
    facilitator: "[Facilitadora a confirmar]",
    desc: "MLOps na prática. Monitoramento, retreino, versionamento de modelos.",
    duration: "2h",
    slots: 20,
    filled: 20,
    level: "Avançado",
    full: true,
  },
  {
    id: "sql",
    track: "ENG. DE DADOS",
    trackColor: "var(--coral-500)",
    title: "SQL avançado para analistas",
    facilitator: "[Facilitadora a confirmar]",
    desc: "Window functions, CTEs, otimização de queries. Para quem já escreve SQL e quer escalar.",
    duration: "2h",
    slots: 30,
    filled: 12,
    level: "Intermediário",
  },
  {
    id: "carreira",
    track: "CARREIRA",
    trackColor: "var(--coral-400)",
    title: "Roda de carreira em dados",
    facilitator: "[Mentora a confirmar]",
    desc: "Conversa em formato roda. Traz sua dúvida, ouve outras. Sem slides, sem palco.",
    duration: "2h",
    slots: 20,
    filled: 5,
    level: "Todos os níveis",
  },
];

const STEP_LABELS = ["Seus dados", "Workshops", "Resumo", "Pronto!"];

/* ===== Stepper header ===== */
function StepperHeader({ step }: { step: number }) {
  return (
    <div className="mb-10">
      <div
        className="text-xs uppercase mb-3"
        style={{
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.16em",
          color: "var(--coral-400)",
        }}
      >
        INSCRIÇÃO · 11ª EDIÇÃO MTSS · 01 DE AGOSTO
      </div>
      <h1
        className="leading-[0.95] text-white mb-8"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(40px, 6vw, 64px)",
          letterSpacing: "-0.04em",
        }}
      >
        {step === 4 ? (
          <>
            Sua vaga está{" "}
            <span style={{ color: "var(--coral-500)" }}>garantida.</span>
          </>
        ) : (
          <>
            Quase lá<span style={{ color: "var(--coral-500)" }}>.</span>
          </>
        )}
      </h1>

      {/* Stepper */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {STEP_LABELS.map((label, i) => {
          const num = i + 1;
          const done = num < step;
          const active = num === step;
          return (
            <div key={i} className="flex items-center gap-2 min-w-0">
              <div className="flex items-center gap-3 shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px] text-white transition-colors duration-200"
                  style={{
                    background: done
                      ? "var(--teal-500)"
                      : active
                      ? "var(--coral-500)"
                      : "rgba(255,255,255,0.1)",
                  }}
                >
                  {done ? "✓" : num}
                </div>
                <span
                  className="text-sm whitespace-nowrap"
                  style={{
                    fontWeight: active ? 700 : 500,
                    color: active ? "white" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className="h-px flex-1 mx-2 min-w-[24px]"
                  style={{
                    background: done
                      ? "var(--teal-500)"
                      : "rgba(255,255,255,0.1)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ===== Step 1 — Personal data ===== */
function StepDados({ onNext }: { onNext: () => void }) {
  const fieldStyle = {
    fontFamily: "var(--font-body)",
    fontSize: 15,
    padding: "14px 16px",
    borderRadius: 12,
    border: "1.5px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    outline: "none",
    width: "100%",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };

  return (
    <div>
      <div className="mb-8">
        <h2
          className="text-[32px] font-bold text-white mb-2"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
        >
          Conta um pouco sobre você
        </h2>
        <p className="text-[15px] text-white/60">
          Esses dados são usados apenas para o evento. Não compartilhamos com
          terceiros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nome completo *">
          <input style={fieldStyle} placeholder="Como aparece no documento" />
        </Field>
        <Field label="Como prefere ser chamada *">
          <input style={fieldStyle} placeholder="Nome social ou apelido" />
        </Field>
        <Field label="Email *">
          <input style={fieldStyle} type="email" placeholder="email@exemplo.com" />
        </Field>
        <Field label="WhatsApp *">
          <input style={fieldStyle} type="tel" placeholder="(11) 99999-9999" />
        </Field>
        <Field label="Você já é membra da comunidade?">
          <select style={fieldStyle}>
            <option value="">Selecione...</option>
            <option>Sim, sou membra ativa</option>
            <option>Sim, mas estou afastada</option>
            <option>Ainda não sou — quero ser!</option>
            <option>Prefiro não responder</option>
          </select>
        </Field>
        <Field label="Sua área de atuação">
          <select style={fieldStyle}>
            <option value="">Selecione...</option>
            <option>Engenharia de Software</option>
            <option>Engenharia/Análise de Dados</option>
            <option>Ciência de Dados / ML</option>
            <option>Cloud / DevOps / SRE</option>
            <option>Produto / Design / UX</option>
            <option>Segurança</option>
            <option>Liderança / Gestão</option>
            <option>Estudante / transição de carreira</option>
            <option>Outra</option>
          </select>
        </Field>
        <Field label="Empresa / Instituição">
          <input style={fieldStyle} placeholder="Opcional" />
        </Field>
        <Field label="LinkedIn">
          <input style={fieldStyle} placeholder="linkedin.com/in/..." />
        </Field>
        <div className="md:col-span-2">
          <Field label="Necessidades de acessibilidade ou alimentares">
            <textarea
              style={{ ...fieldStyle, resize: "vertical" }}
              rows={3}
              placeholder="Vegetariana, restrições, intérprete de Libras, espaço para amamentação, etc."
            />
          </Field>
        </div>
      </div>

      {/* Code of conduct */}
      <div
        className="mt-8 flex items-start gap-3.5 rounded-[12px]"
        style={{
          padding: "16px 20px",
          background: "rgba(95,189,194,0.1)",
          border: "1px solid rgba(95,189,194,0.3)",
        }}
      >
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 w-[18px] h-[18px] shrink-0"
          style={{ accentColor: "var(--teal-500)" }}
        />
        <span className="text-sm leading-[1.5] text-white/80">
          Concordo com o{" "}
          <a
            href="#"
            className="underline"
            style={{ color: "var(--coral-400)" }}
          >
            Código de Conduta
          </a>{" "}
          do MTSS e autorizo o tratamento dos meus dados conforme nossa{" "}
          <a
            href="#"
            className="underline"
            style={{ color: "var(--coral-400)" }}
          >
            Política de Privacidade
          </a>
          .
        </span>
      </div>

      <div className="flex justify-between items-center mt-9">
        <span className="text-[13px] text-white/50">* campos obrigatórios</span>
        <Button variant="coral" onClick={onNext}>
          Próximo: escolher workshops <span>→</span>
        </Button>
      </div>
    </div>
  );
}

/* ===== Step 2 — Workshops ===== */
function StepWorkshops({
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  selected: string[];
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
        <div>
          <h2
            className="text-[32px] font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
          >
            Escolha até 2 workshops
          </h2>
          <p className="text-[15px] text-white/60 max-w-[520px]">
            Workshops acontecem em paralelo das 13h30 às 15h30. Você pode
            escolher no máximo 2 — eles serão em horários diferentes.
          </p>
        </div>
        <div className="text-right shrink-0">
          <div
            className="text-xs uppercase mb-1"
            style={{
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.16em",
              color: "var(--coral-400)",
            }}
          >
            SELECIONADOS
          </div>
          <div
            className="text-[32px] font-bold text-white leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {selected.length}
            <span className="text-white/30">/2</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WORKSHOPS.map((w) => {
          const isSelected = selected.includes(w.id);
          const pct = (w.filled / w.slots) * 100;
          return (
            <button
              key={w.id}
              disabled={!!w.full}
              onClick={() => onSelect(w.id)}
              className="text-left rounded-[16px] relative transition-all duration-150"
              style={{
                padding: 24,
                background: isSelected
                  ? "rgba(255,145,77,0.12)"
                  : "rgba(255,255,255,0.04)",
                border: isSelected
                  ? "2px solid var(--coral-500)"
                  : "2px solid rgba(255,255,255,0.08)",
                opacity: w.full ? 0.45 : 1,
                cursor: w.full ? "not-allowed" : "pointer",
                color: "white",
              }}
            >
              {/* Checkbox */}
              <div
                className="absolute top-5 right-5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: isSelected
                    ? "var(--coral-500)"
                    : "transparent",
                  border: isSelected
                    ? "none"
                    : "2px solid rgba(255,255,255,0.2)",
                }}
              >
                {isSelected && "✓"}
              </div>

              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span
                  className="text-[10px] uppercase font-bold"
                  style={{
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.16em",
                    color: w.trackColor,
                  }}
                >
                  {w.track}
                </span>
                <span className="text-[11px] text-white/40">·</span>
                <span className="text-[11px] text-white/50 font-semibold">
                  {w.level}
                </span>
                <span className="text-[11px] text-white/40">·</span>
                <span className="text-[11px] text-white/50 font-semibold">
                  {w.duration}
                </span>
              </div>

              <h3 className="text-[19px] font-bold mb-2 leading-[1.25]">
                {w.title}
              </h3>
              <p className="text-[13px] leading-[1.5] text-white/60 mb-4">
                {w.desc}
              </p>
              <div className="text-xs text-white/50 mb-2.5">
                Com:{" "}
                <span className="text-white/75 font-semibold">
                  {w.facilitator}
                </span>
              </div>

              {/* Slots bar */}
              <div>
                <div
                  className="flex justify-between text-[11px] mb-1.5 font-semibold"
                  style={{
                    color: w.full
                      ? "var(--pink-400)"
                      : w.almostFull
                      ? "var(--coral-400)"
                      : "rgba(255,255,255,0.55)",
                  }}
                >
                  <span>
                    {w.full
                      ? "ESGOTADO"
                      : w.almostFull
                      ? "ÚLTIMAS VAGAS"
                      : "VAGAS"}
                  </span>
                  <span>
                    {w.filled}/{w.slots}
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${pct}%`,
                      background: w.full
                        ? "var(--pink-500)"
                        : w.almostFull
                        ? "var(--coral-500)"
                        : "var(--teal-500)",
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div
        className="mt-4 flex items-center gap-3 text-sm rounded-[12px] text-white/60"
        style={{
          padding: "14px 20px",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <span>💡</span>
        <span>
          Se você não quiser fazer workshops, é só seguir sem selecionar nada.
          Sua vaga no evento principal já está garantida.
        </span>
      </div>

      <div className="flex justify-between mt-9">
        <Button variant="outline-light" onClick={onBack}>
          <span>←</span> Voltar
        </Button>
        <Button variant="coral" onClick={onNext}>
          {selected.length === 0
            ? "Seguir sem workshops"
            : `Confirmar ${selected.length} workshop${
                selected.length > 1 ? "s" : ""
              }`}{" "}
          <span>→</span>
        </Button>
      </div>
    </div>
  );
}

/* ===== Step 3 — Summary ===== */
function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-[12px]"
      style={{
        padding: 18,
        background: highlight ? "rgba(255,145,77,0.12)" : "rgba(255,255,255,0.04)",
        border:
          "1px solid " +
          (highlight ? "rgba(255,145,77,0.3)" : "rgba(255,255,255,0.08)"),
      }}
    >
      <div
        className="text-[10px] uppercase mb-1.5"
        style={{
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.16em",
          color: highlight ? "var(--coral-400)" : "rgba(255,255,255,0.5)",
        }}
      >
        {label}
      </div>
      <div className="text-[15px] font-semibold text-white">{value}</div>
    </div>
  );
}

function StepResumo({
  selected,
  onNext,
  onBack,
}: {
  selected: string[];
  onNext: () => void;
  onBack: () => void;
}) {
  const selectedWorkshops = WORKSHOPS.filter((w) => selected.includes(w.id));

  return (
    <div>
      <h2
        className="text-[32px] font-bold text-white mb-2"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
      >
        Tudo certo?
      </h2>
      <p className="text-[15px] text-white/60 mb-8">Revisa antes de confirmar.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <SummaryRow label="EVENTO" value="MTSS · 11ª Edição" highlight />
        <SummaryRow label="DATA" value="Sábado, 01 de agosto de 2026" />
        <SummaryRow label="HORÁRIO" value="09:00 às 19:00" />
        <SummaryRow
          label="LOCAL"
          value="João Pessoa, PB · [endereço em breve]"
        />
        <SummaryRow label="FORMATO" value="Presencial + transmissão" />
        <SummaryRow
          label="VALOR"
          value="Gratuito · membras / R$ 80 não-membras"
        />
      </div>

      {/* Workshops */}
      <div
        className="rounded-[16px] mb-6"
        style={{
          padding: 24,
          background: "rgba(255,145,77,0.08)",
          border: "1px solid rgba(255,145,77,0.2)",
        }}
      >
        <div
          className="text-[10px] uppercase mb-3.5"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.16em",
            color: "var(--coral-400)",
          }}
        >
          WORKSHOPS SELECIONADOS · {selected.length}
        </div>
        {selected.length === 0 ? (
          <p className="text-[15px] text-white/60">
            Você não escolheu workshops. Pode voltar e escolher, ou seguir só
            com o evento principal.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {selectedWorkshops.map((w) => (
              <div key={w.id} className="flex items-center gap-3 text-[15px] text-white">
                <span style={{ color: "var(--coral-500)" }}>✓</span>
                <span className="font-semibold">{w.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notices */}
      <div
        className="rounded-[16px] mb-8"
        style={{
          padding: 24,
          background: "rgba(95,189,194,0.08)",
          border: "1px solid rgba(95,189,194,0.2)",
        }}
      >
        <div
          className="text-[10px] uppercase mb-3"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.16em",
            color: "var(--teal-400)",
          }}
        >
          ANTES DE CONFIRMAR
        </div>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-white/80">
          <li>• Vaga em workshop é pessoal e intransferível.</li>
          <li>
            • Se não puder comparecer, libere sua vaga até 7 dias antes para
            outra mulher poder participar.
          </li>
          <li>• Almoço e coffee breaks inclusos para inscritas presenciais.</li>
          <li>• Trazer documento com foto no dia.</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button variant="outline-light" onClick={onBack}>
          <span>←</span> Ajustar workshops
        </Button>
        <Button variant="coral" onClick={onNext}>
          Confirmar inscrição <span>✓</span>
        </Button>
      </div>
    </div>
  );
}

/* ===== Step 4 — Confirmation ===== */
function StepConfirmacao({ selected }: { selected: string[] }) {
  const code = useMemo(
    () => `MTSS-11-${Math.floor(Math.random() * 9000 + 1000)}`,
    []
  );

  return (
    <div className="text-center py-5">
      <div
        className="w-[88px] h-[88px] rounded-full inline-flex items-center justify-center text-[40px] mb-7"
        style={{
          background: "var(--teal-500)",
          boxShadow: "0 0 0 8px rgba(95,189,194,0.15)",
        }}
      >
        ✓
      </div>
      <h2
        className="text-[48px] font-bold text-white mb-4 leading-none"
        style={{
          fontFamily: "var(--font-display)",
          letterSpacing: "-0.04em",
        }}
      >
        Inscrição confirmada!
      </h2>
      <p className="text-lg text-white/70 max-w-[520px] mx-auto mb-10 leading-[1.5]">
        Você vai receber um email de confirmação em alguns minutos com seu
        ingresso e todos os detalhes.
      </p>

      {/* Code */}
      <div
        className="inline-block rounded-[14px] text-left mb-10"
        style={{
          padding: "20px 32px",
          background: "rgba(255,255,255,0.04)",
          border: "1px dashed rgba(255,255,255,0.2)",
        }}
      >
        <div
          className="text-[10px] uppercase mb-1.5"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.16em",
            color: "var(--coral-400)",
          }}
        >
          SEU CÓDIGO DE INSCRIÇÃO
        </div>
        <div
          className="text-[28px] font-bold text-white"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em",
          }}
        >
          {code}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-3.5 mb-14">
        {/* TODO: implement add to calendar */}
        <Button variant="coral">
          Adicionar ao calendário <span>📅</span>
        </Button>
        <Link href="/programacao">
          <Button variant="outline-light">Ver programação</Button>
        </Link>
      </div>

      {/* Community CTA */}
      <div
        className="rounded-[20px] text-left"
        style={{
          padding: 32,
          background:
            "linear-gradient(135deg, rgba(255,145,77,0.12), rgba(129,36,153,0.08))",
          border: "1px solid rgba(255,145,77,0.2)",
        }}
      >
        <div
          className="text-[10px] uppercase mb-2.5"
          style={{
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.16em",
            color: "var(--coral-400)",
          }}
        >
          PRÓXIMOS PASSOS
        </div>
        <h3
          className="text-[24px] font-bold text-white mb-4"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.03em",
          }}
        >
          Quer fazer parte da comunidade o ano todo?
        </h3>
        <p className="text-[15px] text-white/75 mb-5 leading-[1.5]">
          O MTSS é a celebração — mas a comunidade Mulher Tech acontece o ano
          inteiro: rodas de conversa, mentorias, grupos por área, cursos.
        </p>
        {/* TODO: link to institutional site community page */}
        <Button variant="outline-light">
          Conhecer a comunidade <span>→</span>
        </Button>
      </div>
    </div>
  );
}

/* ===== Helper: Field wrapper ===== */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[12px] font-bold uppercase"
        style={{
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

/* ===== Main client component ===== */
export default function InscricaoClient() {
  const [step, setStep] = useState(1);
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]);

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const toggleWorkshop = (id: string) => {
    const w = WORKSHOPS.find((w) => w.id === id);
    if (!w || w.full) return;
    setSelectedWorkshops((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "60px 0 100px",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Constellation density={40} color="rgba(255,255,255,0.4)" />
      <div
        className="relative"
        style={{ maxWidth: 980, margin: "0 auto", padding: "0 32px" }}
      >
        <StepperHeader step={step} />
        <div
          className="rounded-[20px]"
          style={{
            padding: 48,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {step === 1 && <StepDados onNext={goNext} />}
          {step === 2 && (
            <StepWorkshops
              selected={selectedWorkshops}
              onSelect={toggleWorkshop}
              onNext={goNext}
              onBack={goBack}
            />
          )}
          {step === 3 && (
            <StepResumo
              selected={selectedWorkshops}
              onNext={goNext}
              onBack={goBack}
            />
          )}
          {step === 4 && <StepConfirmacao selected={selectedWorkshops} />}
        </div>
      </div>
    </section>
  );
}
