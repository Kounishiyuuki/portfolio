import { PageContainer } from "@/components/ui/page-container";
import { SkillsOverviewSection } from "@/components/skills/skills-overview-section";
import { SkillsPrinciplesSection } from "@/components/skills/skills-principles-section";

export default function SkillsPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.9)] pt-[var(--page-space)]">
      <SkillsOverviewSection />
      <SkillsPrinciplesSection />
    </PageContainer>
  );
}
