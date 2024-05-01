import api from "@/app/server";
import { IMovie } from "@/types/cinema";

import { IResponse } from "@/types/response/IResponse";
import { IShowCategory } from "@/types/showCategory/IShowCategory";

export const categoryController = api.injectEndpoints({
    endpoints: (build) => ({
        categories: build.query<IResponse<IShowCategory[]>, null>({
            query: () => "/General/Data/Screenings",
        }),
        showCategory: build.query<IResponse<IMovie[]>, number>({
            query: (categoryId) => `/General/Show/Shows/${categoryId}`,
        }),
    }),
});

export const { useCategoriesQuery, useShowCategoryQuery } = categoryController;
