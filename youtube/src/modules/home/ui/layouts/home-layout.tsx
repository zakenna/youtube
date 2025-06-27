import { SidebarProvider } from "@/components/ui/sidebar";

interface homelayoutProps {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: homelayoutProps) => {
    return (
        <SidebarProvider>
            <div className="p-4 bg-blue-500">
                <p>Home Navbar!</p>
                {children}
            </div>
        </SidebarProvider>
    );
};

export default HomeLayout;