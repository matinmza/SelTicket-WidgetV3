/* eslint-disable no-restricted-syntax */
import { DrawerListItem } from "@/types/objects";

export const toDrawerListItems = (data: { [x: string]: string }) => {
    const items: DrawerListItem[] = [];

    if (data) {
        for (const [key, value] of Object.entries(data)) {
            items.push({ id: +key, value });
        }
    }

    return items;
};
