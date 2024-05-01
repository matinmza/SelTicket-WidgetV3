import api from "@/app/server";

import { IResponse } from "@/types/response/IResponse";

export const generalController = api.injectEndpoints({
    endpoints: (build) => ({
        provinces: build.query<IResponse<{ [key in string]: string }>, null>({
            query: () => "/General/Data/Provinces",
        }),
        cities: build.query<IResponse<{ [key in string]: string }>, number>({
            query: (provinceId) =>
                `/General/Data/Provinces/${provinceId}?provinceId=${provinceId}`,
        }),
    }),
});
export const { useProvincesQuery, useLazyCitiesQuery } = generalController;
