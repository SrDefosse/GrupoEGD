import { PageHero } from "../../shared/ui/PageHero";
import { BusinessSolutionsSection } from "./BusinessSolutionsSection";
import { CompanyGridSection } from "./CompanyGridSection";

export function EmpresasPage() {
  return <>
    <PageHero eyebrow="Grupo EGD" title="Empresas" description="Cuatro empresas especializadas bajo una misma dirección: compra y venta premium, compra y venta accesible, postventa y detailing, y blindaje automotriz." />
    <CompanyGridSection />
    <BusinessSolutionsSection />
  </>;
}
