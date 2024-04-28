import { Drawer, DrawerContent, DrawerFooter } from "@/components/ui/drawer";
import { useLazyGetContributeByPlanIdQuery } from "@/controllers/contribute.controller";
import { selectPlanId } from "@/features/steps/steps.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC, useEffect, useState } from "react";
import { STRING_STEPS } from "../string.constant";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { stepsActions } from "@/features/steps/steps.slice";
import { useNavigate } from "react-router-dom";

const GoalsCheckPlanIsExist: FC = () => {
    const [openExistModal, setOpenExistModal] = useState(false);
    const planId = useAppSelector(selectPlanId);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [callGetContributeByPlanId] = useLazyGetContributeByPlanIdQuery();
    useEffect(() => {
        if (!planId) return;
        handleCheckExistGoal();
    }, [planId]);

    const onOpen = () => setOpenExistModal(true);
    const onClose = () => setOpenExistModal(false);

    const handleCheckExistGoal = async () => {
        const res = await callGetContributeByPlanId(planId);
        // if this api back status 200 means user have exist plan and need send warning
        // if get status 400 means user not have any plan and can continue
        if ("data" in res) {
            setOpenExistModal(true);
        }
    };

    const handleBack = () => {
        dispatch(stepsActions.reset());
        onClose();
        navigate("/dashboard");
    };

    return (
        <Drawer
            onOpenChange={(stateVal) => {
                stateVal ? onOpen() : onClose();
            }}
            open={openExistModal}
            onClose={onClose}
        >
            <DrawerContent>
                <div className="t-font-14-regular t-p-5">
                    {STRING_STEPS.EXIST_PLAN_MESSAGE}
                </div>

                <DrawerFooter>
                    <div className="t-row">
                        <div className="t-col-span-2">
                            <Button onClick={onClose}>
                                {STRING_STEPS.CREATE_NEW_PLAN}
                            </Button>
                        </div>
                        <div className="t-col-span-2">
                            <Button variant="outline" onClick={handleBack}>
                                {STRING_GLOBAL.BACK}
                            </Button>
                        </div>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default GoalsCheckPlanIsExist;
