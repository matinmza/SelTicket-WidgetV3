import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import {
    useGetBanksQuery,
    useLazyGetPaymentQuery,
} from "@/controllers/category.controller";

import { FC, useEffect, useState } from "react";
import BankCard from "../../bank-card";
import { STRING_BANK } from "../../string-constant";
import { usePostInvoiceMutation } from "@/controllers/invoice.controller";

const FormBankPayment: FC<{ price: number; packageId: string }> = ({
    packageId,
    price,
}) => {
    const {
        data,
        isLoading,
        isSuccess: isSuccessGetBank,
    } = useGetBanksQuery(null);

    const [getPayment, { isLoading: isLoadingPayment, isSuccess }] =
        useLazyGetPaymentQuery();

    const [postInvoice, { isLoading: isLoadingInvoice }] =
        usePostInvoiceMutation();

    useEffect(() => {
        if (!isSuccessGetBank || data.data.result.length < 1) return;
        setBankId(data.data.result[0].id);
    }, [isSuccessGetBank]);

    const [bankId, setBankId] = useState("");

    const onPayment = async () => {
        const getInvoice = await postInvoice(packageId);
        if ("error" in getInvoice) return;
        const res = await getPayment({
            Amount: price,
            BankId: bankId,
            InvoiceId: getInvoice.data.data.id,
        });
        if (!res.isSuccess) return;
        const bankUrl = res.data.data;
        window.location.replace(bankUrl);
    };

    return (
        <div>
            <div className="t-flex t-gap-3">
                {data?.data.result.map((bank) => (
                    <BankCard
                        key={bank.id}
                        onClick={() => setBankId(bank.id)}
                        isActive={bank.id === bankId}
                        {...bank}
                    />
                ))}
            </div>
            <div className="t-font-12-regular t-mt-4 t-mb-5">
                {STRING_BANK.BANK_DESCRIPTION}
            </div>
            <Button
                disabled={!bankId}
                loading={
                    isLoading ||
                    isLoadingPayment ||
                    isSuccess ||
                    isLoadingInvoice
                }
                onClick={onPayment}
            >
                {STRING_GLOBAL.PAYMENT}
            </Button>
        </div>
    );
};

export default FormBankPayment;
