import { FC, useState } from "react";
import TabBar from "@/components/shared/tab-bar";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@/components/ui/drawer";

import { STRING_PACKAGES } from "../packages/string-constant";
import BankCardProduct from "./bank-card-product";

import FormBankPayment from "./forms/payment/FormBankPayment";
const BankView: FC<{ packageId?: string; title?: string; price?: number }> = ({
    packageId,
    price,
    title,
}) => {
    const [open, setOpen] = useState(false);

    const onClose = () => setOpen(false);
    const onOpen = () => setOpen(true);

    return (
        <TabBar>
            <Button onClick={onOpen} disabled={!packageId}>
                {STRING_PACKAGES.BUY_SUBSCRIPTION}
            </Button>
            <Drawer
                onOpenChange={(stateVal) => {
                    stateVal ? onOpen() : onClose();
                }}
                open={open}
                onClose={onClose}
            >
                <DrawerContent>
                    <DrawerHeader className="t-border-b">
                        <BankCardProduct
                            price={price || 0}
                            title={title || ""}
                        />
                    </DrawerHeader>
                    <DrawerFooter>
                        <div className="t-row">
                            <div className="t-col-span-4">
                                <FormBankPayment
                                    price={price || 0}
                                    packageId={packageId || ""}
                                />
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </TabBar>
    );
};

export default BankView;
