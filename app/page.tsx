import NavEdition from "@/components/NavEdition";
import Footer from "@/components/Footer";
import Hero from "./sections/Hero";
import Tema from "./sections/Tema";
import SaveDate from "./sections/SaveDate";
import Trilhas from "./sections/Trilhas";
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
      <Patrocinadores />
      <CTAFinal />
      <Footer />
    </>
  );
}
