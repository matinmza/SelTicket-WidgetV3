import useDynamicLayout from "@/hooks/useDynamicLayout";
import ProfileView from "@/sections/profile/view/profile-view";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage: FC = () => {
    const navigate = useNavigate();
    useDynamicLayout({
        revalidate: true,
        onBack: () => {
            navigate("/dashboard");
        },
    });
    return <ProfileView />;
};

export default ProfilePage;
