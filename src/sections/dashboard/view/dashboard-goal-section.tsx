import Loader from "@/components/shared/loader";
import { useLazyGetContributeQuery } from "@/controllers/contribute.controller";
import { useGetUserQuery } from "@/controllers/user.controller";
import { FC, useEffect } from "react";
import DashboardTitle from "../dashboard-title";
import IconPersonalInformation from "@/components/icons/IconPersonalInformation";
import DashboardPlanCard from "../dashboard-plan-card";
import DashboardStepsDetail from "../dashboard-step-detail";

const DashboardGoalDetailSection: FC = () => {
    const {
        data: user,
        isSuccess,
        isLoading: isLoadingUser,
    } = useGetUserQuery(null);
    const [getContribute, { isLoading, isError, data }] =
        useLazyGetContributeQuery();

    useEffect(() => {
        if (!isSuccess) return;
        getContribute(user.data.contributeId);
    }, [isSuccess]);

    if (isLoading || isLoadingUser) return <Loader />;
    if (isError) return null;
    return (
        <div className="t-py-8 t-px-5">
            <DashboardTitle
                Icon={IconPersonalInformation}
                title={user?.data.fullname || ""}
            />
            <DashboardPlanCard title={data?.data.goal.title || ""} />
            <DashboardStepsDetail steps={data?.data.steps || []} />
            <hr />
        </div>
    );
};

export default DashboardGoalDetailSection;
