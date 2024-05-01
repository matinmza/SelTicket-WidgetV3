import { useState } from "react";
import { Search } from "lucide-react";
import { useDebounce } from "react-use";

import { Button } from "@/components/ui/button";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { STRING_GLOBAL } from "@/constants/string.constants";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import MoviesSkeletonLoading from "./movies-skeleton-loading";
import { useLazySearchQuery } from "@/controllers/cinema.controller";
import MoviesCardSmall from "./movies-card-small";

const MoviesSearchInput = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [loadingType, setLoadingType] = useState(false);
    const [callSearch, { data: searchData, isFetching: searchLoading }] =
        useLazySearchQuery();

    useDebounce(
        () => {
            callSearch(value);
        },
        500,
        [value]
    );
    const haveMovie = searchData?.data && searchData?.data.length > 0;
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="t-w-full t-justify-between"
                >
                    {STRING_GLOBAL.SEARCH}
                    <Search className="t-mr-2 t-h-4 t-w-4 t-shrink-0 t-opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="t-w-[calc(100vw-2rem)] t-p-0">
                <Input
                    value={value}
                    onChange={(e) => {
                        setLoadingType(true);
                        setValue(e.target.value);
                    }}
                    placeholder={STRING_GLOBAL.SEARCH}
                />
                {searchLoading && (
                    <ScrollArea className="t-h-[200px]  t-rounded-md t-py-4 t-mt-2 t-overflow-hidden">
                        <MoviesSkeletonLoading />
                    </ScrollArea>
                )}
                {haveMovie && !searchLoading && (
                    <ScrollArea className="t-h-[200px]  t-rounded-md t-pt-4 t-mt-2 t-overflow-hidden">
                        <div className=" t-flex t-flex-col">
                            {searchData?.data.map((movie) => (
                                <MoviesCardSmall {...movie} />
                            ))}
                        </div>
                    </ScrollArea>
                )}
                {!haveMovie && !searchLoading && (
                    <p className="t-font-12-bold t-flex t-justify-center t-py-2 t-mt-4 t-w-full t-relative t-text-red-400">
                        {STRING_GLOBAL.NOT_FOUND}
                    </p>
                )}
            </PopoverContent>
        </Popover>
    );
};

export default MoviesSearchInput;
