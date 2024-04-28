import useDynamicLayout from "@/hooks/useDynamicLayout";
import DashboardView from "@/sections/dashboard/view/dashboard-view";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: FC = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack() {
            navigate("/");
        },
    });
    return <DashboardView />;
};

export default DashboardPage;
