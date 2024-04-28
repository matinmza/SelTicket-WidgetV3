import useDynamicLayout from "@/hooks/useDynamicLayout";
import ContactUsView from "@/sections/contact-us/view/contact-us-view";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => {
            navigate("/dashboard");
        },
    });
    return <ContactUsView />;
};

export default ContactUsPage;
