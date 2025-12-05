import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import EmergencyService from "@/components/sections/EmergencyService";
import RepairGallery from "@/components/sections/RepairGallery";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustHighlights from "@/components/sections/TrustHighlights";
import SafetyFirst from "@/components/sections/SafetyFirst";
import QualityGuarantee from "@/components/sections/QualityGuarantee";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <MainBanner />
      <TrustHighlights />
      <StatsSection />
      <HowItWorks />
      <AboutSection />
      <SafetyFirst />
      <ExpertiseSection />
      <WhyChooseUs />
      <OurServices />
      <QualityGuarantee />
      <EmergencyService />
      <RepairGallery />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
