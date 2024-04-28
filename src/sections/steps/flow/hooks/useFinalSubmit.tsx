import { useState } from "react";

import { usePostContributeMutation } from "@/controllers/contribute.controller";
import useAppSelector from "@/hooks/store/useAppSelector";
import { selectGoalId } from "@/features/steps/steps.selectors";
import useQuestion from "./useQuestion";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { STRING_STEPS } from "../../string.constant";
import useAppDispatch from "@/hooks/store/useAppDispatch";
import { stepsActions } from "@/features/steps/steps.slice";

const useFinalSubmit = () => {
    const [open, setOpen] = useState(false);
    const goalId = useAppSelector(selectGoalId);
    const { questions } = useQuestion();
    const onClose = () => setOpen(false);
    const onOpen = () => setOpen(true);
    const [callPostContribute, { isLoading }] = usePostContributeMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onFinalSubmit = async () => {
        onClose();
        const res = await callPostContribute({
            goalId,
            steps: questions.map((s) => ({
                inputName: s.inputName,
                stepId: s.id,
                value: s.userValue,
            })),
        });
        if (!("data" in res && res.data.isSuccess)) return;
        dispatch(stepsActions.reset());
        const freeDay = res.data.data.goal.freemiumDays;
        if (freeDay === 0) return navigate("/packages");
        if (freeDay > 0)
            toast({
                title: STRING_STEPS.ACTIVE_YOUR_FREE_DAY,
                description: STRING_STEPS.FREE_DAY_MESSAGE(freeDay),
                variant: "default",
            });
        return navigate("/");
    };

    return {
        open,
        onOpen,
        onClose,
        isLoading,
        onFinalSubmit,
    };
};

export default useFinalSubmit;
