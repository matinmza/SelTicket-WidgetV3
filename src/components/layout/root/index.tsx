import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const RootLayout: FC = () => {
    return (
        <div className="">
            <Header />
            <div className="t-px-4">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
