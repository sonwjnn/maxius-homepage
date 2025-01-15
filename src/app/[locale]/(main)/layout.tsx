import { Header } from "@/components/header";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SidebarIndicators } from "@/components/sidebar-indicators";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <SidebarIndicators />
      <LanguageSwitcher />
      {children}
    </main>
  );
}
