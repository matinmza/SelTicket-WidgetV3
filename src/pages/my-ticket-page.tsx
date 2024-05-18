import useDynamicLayout from "@/hooks/useDynamicLayout";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MyTicketPage: FC = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        onBack: () => {
            navigate(-1);
        },
        revalidate: true,
    });
    return <div>MyTicketPage</div>;
};

export default MyTicketPage;
