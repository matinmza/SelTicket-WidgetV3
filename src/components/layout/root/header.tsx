import ModeToggle from "@/components/theme/theme-mode-toggler";
import { Button } from "@/components/ui/button";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { Ticket } from "lucide-react";

import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
    // const { onBack, phone, showHeader } = useDynamicLayout();

    return (
        <div className="t-w-full t-flex t-justify-between t-px-4 t-bg-background t-py-1 t-border-b">
            <ModeToggle />

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
