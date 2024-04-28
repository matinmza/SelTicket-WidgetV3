import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import PlansList from "../plan-list";

const PlansView: FC = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => navigate("/"),
    });
    return (
        <div className="t-mt-20 t-px-5">
            <PlansList />
        </div>
    );
};

export default PlansView;
