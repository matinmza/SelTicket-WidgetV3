import IconBack from "@/components/icons/IconBack";
import ModeToggle from "@/components/theme/theme-mode-toggler";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import useDynamicLayout from "@/hooks/useDynamicLayout";
import { ArrowLeft, ArrowRight, Ticket } from "lucide-react";

import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    const { onBack, showHeader } = useDynamicLayout();
    // if (showHeader) return <></>;
    return (
        <div className="t-w-full t-flex t-justify-between t-px-4 t-bg-background t-py-2 t-border-b ">
            <div className="t-flex t-gap-4">
                {onBack && (
                    <Button
                        variant="ghost"
                        onClick={onBack}
                        className="t-flex t-gap-2 t-items-center t-font-12-regular"
                    >
                        <ArrowRight className="t-h-4 t-w-4" />
                        {STRING_GLOBAL.BACK}
                    </Button>
                )}

                <ModeToggle />
            </div>
            <Link to="/my-ticket">
                <Button variant="ghost">
                    <Ticket className="t-ml-2 t-h-4 t-w-4" />
                    {STRING_GLOBAL.MY_TICKET}
                </Button>
            </Link>
        </div>
    );
};

export default Header;
