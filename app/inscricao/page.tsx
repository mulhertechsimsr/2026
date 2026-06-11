import NavEdition from "@/components/NavEdition";
import Footer from "@/components/Footer";
import InscricaoClient from "./InscricaoClient";

export const metadata = {
  title: "Inscrição — 11ª Edição MTSS · Dados",
};

export default function InscricaoPage() {
  return (
    <>
      <NavEdition />
      <InscricaoClient />
      <Footer />
    </>
  );
}
