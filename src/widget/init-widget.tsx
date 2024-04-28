import { useInitWidget } from "@/hooks/useWidget";
import { WidgetProps } from "@/types/widget-types/widget.types";
import { FC, PropsWithChildren } from "react";

const InitWidget: FC<PropsWithChildren<WidgetProps>> = ({
    children,
    ...props
}) => {
    const Error = useInitWidget(props);
    if (Error) return Error;
    return children;
};

export default InitWidget;
