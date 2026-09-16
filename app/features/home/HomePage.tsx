import { HomeHeroSection } from "./HomeHeroSection";
import { CompanyStackSection } from "./CompanyStackSection";
import { GroupStatementSection } from "./GroupStatementSection";
import { GroupServicesSection } from "./GroupServicesSection";
import { ExperienceSection } from "./ExperienceSection";
import { StandardsSection } from "./StandardsSection";
import { HomeContactSection } from "./HomeContactSection";

export function HomePage() {
  return <div className="overflow-x-hidden"><HomeHeroSection /><GroupStatementSection /><CompanyStackSection /><ExperienceSection /><GroupServicesSection /><StandardsSection /><HomeContactSection /></div>;
}
