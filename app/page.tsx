import { ExperienceSection } from "@/components/experience-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { MenusSection } from "@/components/menus-section";
import { Navbar } from "@/components/navbar";
import { PracticalInfoSection } from "@/components/practical-info-section";
import { ProducersSection } from "@/components/producers-section";
import { ReservationSection } from "@/components/reservation-section";
import { StorySection } from "@/components/story-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="flex-1">
        <Hero />
        <ExperienceSection />
        <MenusSection />
        <StorySection />
        <ProducersSection />
        <GallerySection />
        <ReservationSection />
        <FaqSection />
        <PracticalInfoSection />
      </main>
      <Footer />
    </>
  );
}
