export const edicao2026 = {
  // Identity
  name: "11ª Edição · Dados",
  slug: "2026",
  eventDate: "2026-08-01",
  eventDateLabel: "01 de agosto de 2026",
  eventDateShort: "01 AGO",
  eventDayLabel: "Sábado, 01 de agosto de 2026",
  location: "João Pessoa, PB",
  timeRange: "09h às 19h",
  format: "Presencial + transmissão",
  editionNumber: "11ª Edição",
  theme: "Dados",

  // Assets — place logo-edicao-2026.png in /public
  logoSrc: "/logo-edicao-2026.png",
  logoAlt: "Mulher Tech Sim Senhor · 11ª Edição · Dados",

  // CSS variable overrides applied via data-theme="2026" on <html>
  cssVars: {
    "--purple-900": "#0D1159",
    "--purple-800": "#241A5E",
    "--purple-700": "#4C2F71",
    "--purple-600": "#6B4899",
    "--purple-500": "#812499",
    "--coral-500": "#FF914D",
    "--coral-400": "#FFA96D",
    "--coral-300": "#FFC49A",
    "--teal-700": "#0D1159",
    "--teal-600": "#3FA3A8",
    "--teal-500": "#5FBDC2",
    "--teal-400": "#82CDD1",
    "--pink-500": "#812499",
    "--pink-400": "#9D3BB5",
  },
} as const;

export type EditionTheme = typeof edicao2026;
