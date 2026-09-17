import { Outlet } from "react-router";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export default function MarketingLayout() {
  return <div className="min-h-screen overflow-x-clip bg-egd-base text-egd-ink"><SiteHeader /><main><Outlet /></main><SiteFooter /></div>;
}
