import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Manrope,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "11ª Edição · Dados — Mulher Tech Sim Senhor",
  description:
    "Um dia inteiro para falar sobre como dados, IA e cloud estão remodelando as carreiras femininas em tecnologia. 01 de agosto de 2026 · João Pessoa, PB.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="2026"
      className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen" style={{ background: "var(--purple-900)", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
