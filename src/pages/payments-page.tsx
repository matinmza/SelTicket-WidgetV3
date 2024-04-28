import useDynamicLayout from "@/hooks/useDynamicLayout";
import { useNavigate } from "react-router-dom";

const PaymentsPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => {
            navigate("/dashboard");
        },
    });
    return <div>PaymentsPage</div>;
};

export default PaymentsPage;
