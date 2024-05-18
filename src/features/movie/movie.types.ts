import { IMovie } from "@/types/cinema";
import { DrawerListItem } from "@/types/objects";

export interface MovieStateI {
    activeMovie?: IMovie;
    city?: DrawerListItem;
    province?: DrawerListItem;
}
