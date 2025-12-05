import AboutSection from "@/components/sections/AboutSection";
import MainBanner from "@/components/sections/MainBanner";
import OurServices from "@/components/sections/OurServices";
import ServiceDetails from "@/components/sections/ServiceDetails";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import EmergencyService from "@/components/sections/EmergencyService";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import StatsSection from "@/components/sections/StatsSection";
import TrustHighlights from "@/components/sections/TrustHighlights";
import SafetyFirst from "@/components/sections/SafetyFirst";
import QualityGuarantee from "@/components/sections/QualityGuarantee";

const Company = async ({ params }) => {
  const { slug } = await params; // Await the params
  const company = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <>
      <Header company={company} />
      <MainBanner company={company} />
      <TrustHighlights />
      <ServiceDetails company={company} />
      <HowItWorks company={company} />
      <SafetyFirst />
      <StatsSection company={company} />
      <WhyChooseUs company={company} />
      <EmergencyService company={company} />
      <QualityGuarantee />
      <AboutSection company={company} />
      <RepairGallery company={company} />
      <FAQSection company={company} />
      <ContactSection company={company} />
      <Footer company={company} />
    </>
  );
};

export default Company;
