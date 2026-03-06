import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ProductDetailsSection from "@/components/landing/ProductDetailsSection";
import HowItFitsSection from "@/components/landing/HowItFitsSection";
import ColorOptionsSection from "@/components/landing/ColorOptionsSection";
import SizeGuideSection from "@/components/landing/SizeGuideSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import DeliverySection from "@/components/landing/DeliverySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyCart from "@/components/landing/StickyCart";

const Index = () => {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <ProductDetailsSection />
      <HowItFitsSection />
      <ColorOptionsSection />
      <SizeGuideSection />
      <ReviewsSection />
      <GuaranteeSection />
      <DeliverySection />
      <FinalCTASection />
      <StickyCart />
    </main>
  );
};

export default Index;
