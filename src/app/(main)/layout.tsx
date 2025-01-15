import { Header } from "@/components/header";
import { SidebarIndicators } from "@/components/sidebar-indicators";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <SidebarIndicators />
      {children}
    </main>
  );
}
