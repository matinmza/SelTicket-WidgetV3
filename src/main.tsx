import ReactDOM from "react-dom/client";

import "./index.css";
import Widget from "./App";
import { IMG_CONSTANTS } from "./constants/img.constants";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Widget
            applicationId={import.meta.env.VITE_APPLICATION_ID}
            onClose={() => {}}
            token="c20T116gWHD4RNIHNcz4Y8HxWCqgLAhyP+uztafComFAZm7R5bI7fdEfqVyX1k+StREmYSEe7ZQoxEkpuel9/Jy+iHIzv7lYMx+qL+OMn2bc6Oxf5VQZsKLWUF0domTDRsbjA92+NBFd7PGiWBnT37SKQ9+FoGjhEW2CkxZKVmJq0SiJN5LUauJyPaRIQCNNv+ksf5flpI9NF//RZW9n3MxyQ4ZF5LIGHDbgxz2f/8BjkKgYlVbyHnsjCFWGM58JRm5Ci4vvuOWSQlWnpJWDPEZLDvK9KsaxDFfjBEpiDkTXSPx0ia0VVDXxbzXdCsWV3gJj3PnB2bX5nTrAPCvi4+JkEuFGKghub4xl8tqglmrVv8Ci8eXkn1RTyakZH99gBSk6tQYjy6DMcTBkFdkreSOQHyDLHUoGLaTJS2DT9NpZYB6CCVkeYsPIbIWApyLQGXF2ruFwvg1TzVmdpC/wL/RA1+xqrl/YalwhQgGnN6yBFX8+H+bB5+rYZwp6DrUcMz1d04oVGI0jf/vfDomZ7DA0/C2qZZpUHljRp2FBrB5Cw6aeW9jq7V/BDaKoWtd0D+JGtrJJh/Iv25cQKP/mQ9HHEpcBoBbP+ITk6kWpGkhEAOzv8PqpcNY5yIKmehsXGt+csP6Y/rOjl5VhxKkypzbLRNdd1KJvBxxbmENOdi0="
            logo={IMG_CONSTANTS.LOGO}
            logoBot={IMG_CONSTANTS.ROBOT_AVATAR}
        />
    </>
);
