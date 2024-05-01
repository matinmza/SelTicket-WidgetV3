export interface ICinema {
    id: number;
    title: string;
    address: string;
    contacts: IContact[] | null;
    image?: any;
    province_id: number;
    city_id: number;
    lat?: number;
    long?: number;
}

interface IContact {
    valueKind: number;
}

export interface IMovie {
    id: number;
    kind: string;
    title: string;
    time?: number;
    age_category: any;
    release_year?: number;
    genres: Genre[];
    image_url: string;
    description: any;
    cast_description?: string;
    distribution_title: any;
    movie_review?: string;
    about_show?: string;
    duration?: number;
    age_range: any;
    production_date?: number;
    release_at: string;
    rate: any;
    faqs: any[];
    galleries: any[];
    banner?: string;
    actors: Actor[];
    directors: Director[];
    producers: Producer[];
    others: any[];
    assets: Assets;
    trailer_url?: TrailerUrl;
    categories: Category[];
    screening_id: number;
    data_metas: any;
}

export interface Genre {
    id: number;
    title: string;
}

export interface Actor {
    id: number;
    name: string;
    image_url?: string;
}

export interface Director {
    id: number;
    name: string;
    image_url?: string;
}

export interface Producer {
    id: number;
    name: string;
    image_url?: string;
}

export interface Assets {
    valueKind: number;
}

export interface TrailerUrl {
    valueKind: number;
}

export interface Category {
    id: number;
    title: string;
}
