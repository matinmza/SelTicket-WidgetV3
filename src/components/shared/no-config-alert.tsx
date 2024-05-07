import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { FC } from "react";

import { STRING_GLOBAL } from "@/constants/string.constants";

const NoConfigAlert: FC = () => {
    return (
        <div className="t-h-screen t-w-full t-p-4">
            <Alert variant="destructive">
                <AlertCircle className="t-h-4 t-w-4" />
                <AlertTitle>{STRING_GLOBAL.ERROR}</AlertTitle>
                <AlertDescription>{STRING_GLOBAL.NO_CONFIG}</AlertDescription>
            </Alert>
        </div>
    );
};

export default NoConfigAlert;
