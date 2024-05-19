import { IMovie } from "@/types/cinema";

export interface MovieStateI {
    activeMovie?: IMovie;
    selectedDateSans: string;
}
