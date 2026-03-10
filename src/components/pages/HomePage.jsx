import HeroSection from "../sections/HeroSection";
import HeroIntroSection from "../sections/HeroIntroSection";
import ServicesSection from "../sections/ServicesSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import WhyChooseSection from "../sections/WhyChooseSection";
import PortfolioSection from "../sections/PortfolioSection";
import CTASection from "../sections/CTASection";

function HomePage({ theme }) {
  return (
    <main className="relative z-10">
      <HeroSection theme={theme} />
      <HeroIntroSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <PortfolioSection />
      <CTASection />
    </main>
  );
}

export default HomePage;
