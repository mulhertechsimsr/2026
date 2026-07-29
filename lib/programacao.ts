export type RoomKey = "auditorio" | "sala01" | "sala02" | "sala03";

export interface Room {
  key: RoomKey;
  /** Rótulo curto usado em chips e tags */
  label: string;
  /** Nome completo, usado na legenda */
  full: string;
  /** Tom da paleta da marca, com contraste garantido sobre o roxo escuro */
  color: string;
}

export const ROOMS: Room[] = [
  { key: "auditorio", label: "Auditório", full: "Auditório", color: "#ff914d" },
  { key: "sala01", label: "Sala 01", full: "Sala 01 · Multiatividades", color: "#5fbdc2" },
  { key: "sala02", label: "Sala 02", full: "Sala 02", color: "#eb6e96" },
  { key: "sala03", label: "Sala 03", full: "Sala 03", color: "#c58ce0" },
];

export const ROOM_BY_KEY: Record<RoomKey, Room> = ROOMS.reduce(
  (acc, room) => ({ ...acc, [room.key]: room }),
  {} as Record<RoomKey, Room>,
);

export interface Session {
  room: RoomKey;
  /** Formato da atividade: Palestra, Workshop, Painel… */
  kind: string;
  title: string;
  speakers?: string;
  /** Selo extra — patrocínio, duração contínua etc. */
  note?: string;
  /** Inscrição própria, separada da inscrição geral do evento */
  cta?: { label: string; url: string };
}

/** Uma faixa de horário dentro de um bloco contínuo */
export interface SlotRow {
  start: string;
  end: string;
  sessions: Session[];
}

export type Slot =
  | { type: "sessions"; start: string; end: string; sessions: Session[] }
  | { type: "break"; start: string; end: string; label: string; icon: string }
  /**
   * Bloco onde uma atividade contínua (`spanning`) atravessa várias faixas de
   * horário — a célula mesclada da planilha. Renderiza como um card único
   * esticado ao lado das faixas em `rows`.
   */
  | {
      type: "group";
      start: string;
      end: string;
      spanning: Session[];
      rows: SlotRow[];
    };

/** Roda de forma contínua na Sala 01 das 10:10 até o almoço, em paralelo ao auditório */
const CODE_GAME: Session = {
  room: "sala01",
  kind: "Atividade",
  title: "Code Game",
  cta: {
    label: "Inscrever no Code Game",
    url: "https://forms.gle/neu9kAWvPadSGN8VA",
  },
};

export const PROGRAMACAO: Slot[] = [
  {
    type: "sessions",
    start: "09:00",
    end: "09:20",
    sessions: [
      {
        room: "auditorio",
        kind: "Abertura",
        title: "Abertura oficial da 11ª edição",
      },
    ],
  },
  {
    type: "sessions",
    start: "09:20",
    end: "10:10",
    sessions: [
      {
        room: "auditorio",
        kind: "Palestra",
        title: "Como a IA está mudando a Arquitetura em Nuvem",
        speakers: "Simara Conceição",
      },
    ],
  },
  {
    type: "group",
    start: "10:10",
    end: "12:00",
    spanning: [CODE_GAME],
    rows: [
      {
        start: "10:10",
        end: "10:40",
        sessions: [
          {
            room: "auditorio",
            kind: "Palestra",
            title:
              "Mulher, você Precisa de uma Estratégia para o Mercado Global!",
            speakers: "Maria Luiza Lyra e Izabelle Amaro",
            note: "Momento Cloud++",
          },
        ],
      },
      {
        start: "10:40",
        end: "11:10",
        sessions: [
          {
            room: "auditorio",
            kind: "Momento",
            title: "Momento Solana",
          },
        ],
      },
      {
        start: "11:10",
        end: "12:00",
        sessions: [
          {
            room: "auditorio",
            kind: "Painel",
            title: "Mesa redonda: Representatividade",
          },
        ],
      },
    ],
  },
  {
    type: "break",
    start: "12:00",
    end: "14:00",
    label: "Almoço e networking",
    icon: "🍽️",
  },
  {
    type: "sessions",
    start: "14:00",
    end: "14:40",
    sessions: [
      {
        room: "auditorio",
        kind: "Palestra",
        title: "Heranças da Memória? Reescrevendo Narrativas com Data Feminism",
        speakers: "Taty Calixto e Amanda Calixto",
      },
      {
        room: "sala01",
        kind: "Palestra",
        title:
          "IA Generativa e Engenharia de Dados: onde a inteligência realmente começa",
        speakers: "Bianca Amorim",
      },
      {
        room: "sala02",
        kind: "Palestra",
        title: "Overclock Humano: substituível pela IA, exausta pelas metas",
        speakers: "Psicóloga Lorraine Oliveira",
      },
      {
        room: "sala03",
        kind: "Workshop",
        title:
          "Do zero ao portfólio: engenharia de dados com ferramentas open source",
        speakers: "Gisele Fonseca",
      },
    ],
  },
  {
    type: "sessions",
    start: "14:40",
    end: "15:20",
    sessions: [
      {
        room: "auditorio",
        kind: "Palestra",
        title:
          "Bioinformática: Como algoritmos transformam problemas biológicos em soluções computacionais",
        speakers: "Geovana Bezerra",
      },
      {
        room: "sala01",
        kind: "Palestra",
        title:
          "O Design da Empatia Sintética: como a IA está redesenhando a essência humana",
        speakers: "Rebecca Tatini",
      },
      {
        room: "sala02",
        kind: "Palestra",
        title:
          "IA para QAs: Derrubando o mito da substituição e tornando a IA uma aliada!",
        speakers: "Dayane Felix",
      },
      {
        room: "sala03",
        kind: "Palestra",
        title:
          "Investigação Digital: Como a Tecnologia Revela o Que Está Oculto",
        speakers: "Nicolle Garrido",
      },
    ],
  },
  {
    type: "sessions",
    start: "15:20",
    end: "16:00",
    sessions: [
      {
        room: "auditorio",
        kind: "Palestra",
        title:
          "Web3: Oportunidades e Protagonismo Feminino na Nova Era da Internet",
        speakers: "Ana Clara Fabião",
        note: "SheFi",
      },
    ],
  },
  {
    type: "sessions",
    start: "16:00",
    end: "16:20",
    sessions: [
      {
        room: "auditorio",
        kind: "Palestra",
        title:
          "GitHub Copilot: Seu companheiro de IA para todos os fluxos de trabalho",
        speakers: "Sulamita Dantas",
      },
    ],
  },
  {
    type: "break",
    start: "16:20",
    end: "16:40",
    label: "Intervalo",
    icon: "☕",
  },
  {
    type: "sessions",
    start: "16:40",
    end: "17:00",
    sessions: [
      {
        room: "auditorio",
        kind: "Encerramento",
        title: "Sorteios, avisos e encerramento",
      },
    ],
  },
];
