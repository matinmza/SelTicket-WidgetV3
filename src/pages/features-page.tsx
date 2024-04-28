import useDynamicLayout from "@/hooks/useDynamicLayout";
import FeaturesView from "@/sections/features/view/features-view";
import { useNavigate } from "react-router-dom";

const FeaturesPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => {
            navigate("/dashboard");
        },
    });
    return <FeaturesView />;
};

export default FeaturesPage;
