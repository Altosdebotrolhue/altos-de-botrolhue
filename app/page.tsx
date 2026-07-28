import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#faf8f3]">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Gallery />

      <Contact />

      <Map />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}