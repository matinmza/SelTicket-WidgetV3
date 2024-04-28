import TabBar from "@/components/shared/tab-bar";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { FC, useEffect } from "react";

import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@/components/ui/drawer";
import IconSubmitDetail from "@/components/icons/IconSubmitDetail";
import { STRING_STEPS } from "../string.constant";
import useFinalSubmit from "./hooks/useFinalSubmit";

const FlowFinalSubmitModal: FC<{ skip: boolean }> = ({ skip }) => {
    const { isLoading, onClose, onFinalSubmit, onOpen, open } =
        useFinalSubmit();

    useEffect(() => {
        if (skip && onFinalSubmit) onFinalSubmit();
    }, [skip]);
    return (
        <div>
            <TabBar>
                <Button onClick={onOpen} loading={isLoading}>
                    {STRING_GLOBAL.SUBMIT_AND_CONTINUE}
                </Button>
                <Drawer
                    onOpenChange={(stateVal) => {
                        stateVal ? onOpen() : onClose();
                    }}
                    open={open}
                    onClose={onClose}
                >
                    <DrawerContent>
                        <DrawerHeader>
                            <div className="t-flex t-justify-center">
                                <IconSubmitDetail />
                            </div>
                            <div className="t-font-16-regular t-px-16">
                                {STRING_STEPS.ARE_YOU_SURE_SUBMIT_DETAIL}
                            </div>
                        </DrawerHeader>
                        <DrawerFooter>
                            <div className="t-row">
                                <div className="t-col-span-2">
                                    <Button onClick={onClose} variant="outline">
                                        {STRING_STEPS.EDIT_DETAIL}
                                    </Button>
                                </div>
                                <div className="t-col-span-2">
                                    <Button onClick={onFinalSubmit}>
                                        {STRING_STEPS.SUBMIT_DETAIL}
                                    </Button>
                                </div>
                            </div>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </TabBar>
        </div>
    );
};

export default FlowFinalSubmitModal;
