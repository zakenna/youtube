import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { UserSection } from "./userSection";
import { MainSection } from "./mainSection";

export const Homesidebar = () => {
  return (
    <Sidebar className="pt-16 z-40  border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <UserSection />
      </SidebarContent>
    </Sidebar>
  );
};
