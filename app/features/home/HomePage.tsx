import { HomeHeroSection } from "./HomeHeroSection";
import { CompanyStackSection } from "./CompanyStackSection";
import { GroupStatementSection } from "./GroupStatementSection";
import { GroupServicesSection } from "./GroupServicesSection";
import { ExperienceSection } from "./ExperienceSection";
import { StandardsSection } from "./StandardsSection";
import { HomeContactSection } from "./HomeContactSection";
import { BusinessSolutionsSection } from "../empresas/BusinessSolutionsSection";

export function HomePage() {
  return <div className="overflow-x-clip"><HomeHeroSection /><GroupStatementSection /><CompanyStackSection /><BusinessSolutionsSection variant="compact" /><ExperienceSection /><GroupServicesSection /><StandardsSection /><HomeContactSection /></div>;
}
