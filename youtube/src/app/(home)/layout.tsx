import HomeLayout from "@/modules/home/ui/layouts/home-layout";
import Search from "@/modules/home/ui/layouts/search";

interface layoutProps {
    children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
    return (
        <div>
            <HomeLayout>
                {children}
            </HomeLayout>
            <Search/>
        </div>
    );
};

export default layout;