import { FC } from "react";
import { STRING_PROFILE } from "../string.constant";
import ProfileCard from "../profile-card";
import { useGetUserQuery } from "@/controllers/user.controller";
import Loader from "@/components/shared/loader";
import { toDate } from "@/utils/shared/time-methods";

const ProfileView: FC = () => {
    const { data: user, isLoading } = useGetUserQuery(null);
    if (isLoading) return <Loader />;
    return (
        <div className="t-px-5">
            <h2 className="t-font-12-regular t-pb-4 t-pt-6">
                {STRING_PROFILE.PERSONAL_INFORMATION}
            </h2>

            <ProfileCard
                title={STRING_PROFILE.NAME}
                value={user?.data.fullname}
            />
            <ProfileCard
                title={STRING_PROFILE.EMAIL}
                value={user?.data.email}
            />
            <ProfileCard
                title={STRING_PROFILE.BIRTHDAY}
                value={user && toDate(user.data.birthDate)}
            />
            <ProfileCard
                title={STRING_PROFILE.GENDER}
                value={user && STRING_PROFILE[user.data.gender]}
            />
        </div>
    );
};

export default ProfileView;
