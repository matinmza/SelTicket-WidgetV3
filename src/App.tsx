// packages
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// components
import router from "@/router";
import store from "@/app/store";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import InitWidget from "./widget/init-widget";

// css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// types
import { WidgetProps } from "./types/widget-types/widget.types";

const Widget = (props: WidgetProps) => {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Provider store={store}>
                <InitWidget {...props}>
                    <RouterProvider router={router} />
                </InitWidget>
                <Toaster />
            </Provider>
        </ThemeProvider>
    );
};

export default Widget;
