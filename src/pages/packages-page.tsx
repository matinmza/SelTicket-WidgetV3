import useDynamicLayout from "@/hooks/useDynamicLayout";
import PackagesView from "@/sections/packages/view/packages-view";
import { useNavigate } from "react-router-dom";

const PackagesPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => {
            navigate("/dashboard");
        },
    });
    return <PackagesView />;
};

export default PackagesPage;
