import { selectLogoBot } from "@/features/widget/widget.selectors";
import useAppSelector from "@/hooks/store/useAppSelector";
import { FC } from "react";
import { Link } from "react-router-dom";

const DashboardFloatChatButton: FC = () => {
    const chatBotLogo = useAppSelector(selectLogoBot);
    return (
        <Link
            to="/"
            className="t-bg-green t-rounded-full t-p-1 t-fixed t-left-5  t-bottom-5 t-cursor-pointer"
        >
            <img src={chatBotLogo} alt="robot" className="t-w-16 t-h-16" />
        </Link>
    );
};

export default DashboardFloatChatButton;
