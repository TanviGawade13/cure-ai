import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import FamilySection from "@/components/family-section";
import TrustSection from "@/components/trust-section";
import PricingSection from "@/components/pricing-section";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <HeroSection />
      <HowItWorks />
      <FamilySection />
      <TrustSection />
      <PricingSection />
      <SiteFooter />
    </main>
  );
}
