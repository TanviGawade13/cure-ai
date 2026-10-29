import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import FamilySection from "@/components/family-section";
import TrustSection from "@/components/trust-section";
import PricingSection from "@/components/pricing-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-paper text-ink">
        <HeroSection />
        <HowItWorks />
        <FamilySection />
        <TrustSection />
        <PricingSection />
      </main>
      <SiteFooter />
    </>
  );
}
