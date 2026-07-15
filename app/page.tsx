import { ChefSection } from "@/components/chef-section";
import { EditorialBand } from "@/components/editorial-band";
import { ExpectationsSection } from "@/components/expectations-section";
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu" className="flex-1">
        <Hero />
        <ExperienceSection />
        <MenusSection />
        <ChefSection />
        <EditorialBand />
        <ProducersSection />
        <ExpectationsSection />
        <GallerySection />
        <ReservationSection />
        <FaqSection />
        <PracticalInfoSection />
      </main>
      <Footer />
    </>
  );
}
