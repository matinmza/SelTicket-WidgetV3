import Widget from "@/App";
import r2wc from "@r2wc/react-to-web-component";

// eslint-disable-next-line react-refresh/only-export-components
const WidgetConverted = r2wc(Widget, {
    props: {
        token: "string",
        applicationId: "string",
        onClose: "function",
        onBackToApp: "function",
        onRefreshToken: "function",
        logo: "string",
        logoBot: "string",
    },
});

customElements.define("ai-assistant", WidgetConverted);
