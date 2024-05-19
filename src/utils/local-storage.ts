import { DrawerListItem } from "@/types/objects";

export type LocalStorageValueT = "TOKEN" | "PROVINCE";

interface ProvinceStateI {
    province?: DrawerListItem;
    city?: DrawerListItem;
}

export const getLocalStorage = <T>(key: LocalStorageValueT): T | null => {
    try {
        const value = localStorage.getItem(key) as string;
        const localStorageParse = JSON.parse(value) as T;
        return localStorageParse;
    } catch (error) {
        return null;
    }
};

export const setLocalStorage = (
    key: LocalStorageValueT,
    value: object | string | number | boolean
): boolean => {
    try {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
        return true;
    } catch (error) {
        return false;
    }
};

export const removeLocalStorage = (key: LocalStorageValueT): boolean => {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        return false;
    }
};

// token
export const handleSetToken = (token: string) =>
    setLocalStorage("TOKEN", token);
export const handleGetToken = () => getLocalStorage<string>("TOKEN");
export const handleRemoveToken = () => removeLocalStorage("TOKEN");

// province
export const handleSetProvinceStore = (
    key: "province" | "city",
    value?: DrawerListItem
) => {
    const state = handleGetAll() || {};
    console.log(value);
    setLocalStorage("PROVINCE", { ...state, [key]: value });
};
export const handleGetAll = () => getLocalStorage<ProvinceStateI>("PROVINCE");

export const handleGetProvinceStore = (key: "city" | "province") => {
    const res = handleGetAll();
    if (res) return res[key];
    return undefined;
};
