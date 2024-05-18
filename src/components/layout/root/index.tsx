import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

const RootLayout: FC = () => {
    return (
        <div className="">
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
