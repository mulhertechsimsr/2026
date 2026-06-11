import NavEdition from "@/components/NavEdition";
import Footer from "@/components/Footer";
import ProgramacaoClient from "./ProgramacaoClient";

export const metadata = {
  title: "Programação — 11ª Edição MTSS · Dados",
};

export default function ProgramacaoPage() {
  return (
    <>
      <NavEdition />
      <ProgramacaoClient />
      <Footer />
    </>
  );
}
