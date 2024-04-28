import RootLayout from "@/components/layout/root";
import DashboardPage from "@/pages/dashboard-page";

import ChatPage from "@/pages/chat-page";
import StepsPage from "@/pages/steps-page";
import { createMemoryRouter } from "react-router-dom";
import PackagesPage from "@/pages/packages-page";
import ProfilePage from "@/pages/profile-page";
import PaymentsPage from "@/pages/payments-page";
import FeaturesPage from "@/pages/features-page";
import ContactUsPage from "@/pages/contact-us-page";

const router = createMemoryRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <ChatPage />,
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/packages",
                element: <PackagesPage />,
            },
            {
                path: "/steps",
                element: <StepsPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/payments",
                element: <PaymentsPage />,
            },
            {
                path: "/features",
                element: <FeaturesPage />,
            },
            {
                path: "/contact-us",
                element: <ContactUsPage />,
            },
        ],
    },
]);

export default router;
