import { Outlet } from "react-router";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export default function MarketingLayout() {
  return <div className="min-h-screen overflow-x-hidden bg-[#101113] text-[#f2f0eb]"><SiteHeader /><main><Outlet /></main><SiteFooter /></div>;
}
