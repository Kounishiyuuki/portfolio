import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/ui/page-container";
import { SectionContainer } from "@/components/ui/section-container";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <PageContainer>
      <SectionContainer
        eyebrow={eyebrow}
        title={title}
        description={description}
      >
        <Card inset padding="lg" />
      </SectionContainer>
    </PageContainer>
  );
}
