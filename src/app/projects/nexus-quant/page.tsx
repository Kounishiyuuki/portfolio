import { PageContainer } from "@/components/ui/page-container";
import { NexusQuantContentSection } from "@/components/projects/nexus-quant-content-section";
import { NexusQuantHeroSection } from "@/components/projects/nexus-quant-hero-section";
import { NexusQuantMediaSection } from "@/components/projects/nexus-quant-media-section";
import { NexusQuantRelatedSection } from "@/components/projects/nexus-quant-related-section";

export default function NexusQuantDetailPage() {
  return (
    <PageContainer className="pb-[calc(var(--section-space)*0.95)] pt-[var(--page-space)]">
      <div className="space-y-10 md:space-y-14">
        <NexusQuantHeroSection />
        <NexusQuantContentSection />
        <NexusQuantMediaSection />
        <NexusQuantRelatedSection />
      </div>
    </PageContainer>
  );
}
