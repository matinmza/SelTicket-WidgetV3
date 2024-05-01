import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/theme-provider";

const ModeToggle = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className=" t-h-[1.2rem] t-w-[1.2rem] t-rotate-0 t-scale-100 t-transition-all dark:-t-rotate-90 dark:t-scale-0" />
                    <Moon className="t-absolute t-h-[1.2rem] t-w-[1.2rem] t-rotate-90 t-scale-0 t-transition-all dark:t-rotate-0 dark:t-scale-100" />
                    <span className="t-sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    روشن
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    تاریک
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    سیستم
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;
