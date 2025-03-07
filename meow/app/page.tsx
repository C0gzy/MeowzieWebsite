import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { DonationsSection } from "@/components/home/DonationsSection";

/**
 * Main homepage for meowzie website
 * Combines all the section components in a clean, organized structure
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DonationsSection />
      </main>
      <Footer />
    </>
  );
}
