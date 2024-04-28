import ReactDOM from "react-dom/client";

import "./index.css";
import Widget from "./App";
import { IMG_CONSTANTS } from "./constants/img.constants";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Widget
            applicationId={import.meta.env.VITE_APPLICATION_ID}
            onClose={() => {}}
            token="eyJhbGciOiJBMTI4S1ciLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwidHlwIjoiSldUIiwiY3R5IjoiSldUIn0.b3Q5rMCTZ6HZj5jMXurLv-C1yojVeR8by3AIlVxcMS41g5nIyTRe7Q.NyEHbXyAKNuKU0m0mE5_Lw.pMpbw0Jwx0yEFt0S9ILgU8Q686k1FrwzJnqnbtbLkuwBE58qglBu5PMt2JNITR6YcBesHd31_qEekxILIynD_ItdlWjPrP-7ejwwA-cC4vPmLmDmMcmBKyyvKhvwapO1b8IIl7AZwpE4tJxeY0qY56MpqNHSe7C2zAtkUX26TAeUsT1DRhK0cOfb2M1NVaNMXB0FPi2IUwfoMk3hR4OgfMYV1sRjj_sDpuU7VSSanIfWslbQoeYCeHbRrr19NH_s1EcXdmAXP4oV_zGqvRDZ0aW8d4JXD8c8EILu068YgJmXT4coj_RRLj2RXXCNZFsTvIkjzt97KGVHyqwPYLZt9PhJdfQvMrW7UJCsTlpMLGpBPMPbxj2FcAXetUFWMtb0caBxw_udMUjFxjuwwVRoQO916xt3MFxQcUzoHeHqrTiZRQzmOOphHIi5fm0PXYsHJIHBJZ_B0zYGDb3pDOVTxulQQRNpk_OFIwgYhKYvuXM9wUxGDabfVo62_-sHrSjaAnIiyQPGYEWW7UTTmLYdxmbhnbtdGkXsT2HlT5Oh7L8.i9MOKpbYYhZS9aAc4AhP7A"
            logo={IMG_CONSTANTS.LOGO}
            logoBot={IMG_CONSTANTS.ROBOT_AVATAR}
        />
    </>
);
