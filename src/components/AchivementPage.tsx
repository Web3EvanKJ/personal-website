import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function AchivementPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 space-y-16">
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
    </div>
  );
}
