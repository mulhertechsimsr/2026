import NavEdition from "@/components/NavEdition";
import Footer from "@/components/Footer";
import Hero from "./sections/Hero";
import Tema from "./sections/Tema";
import SaveDate from "./sections/SaveDate";
import Trilhas from "./sections/Trilhas";
import Local from "./sections/Local";
import Patrocinadores from "./sections/Patrocinadores";
import CTAFinal from "./sections/CTAFinal";

export default function EdicaoPage() {
  return (
    <>
      <NavEdition />
      <Hero />
      <Tema />
      <SaveDate />
      <Trilhas />
      <Local />
      <Patrocinadores />
      <CTAFinal />
      <Footer />
    </>
  );
}
