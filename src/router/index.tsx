import RootLayout from "@/components/layout/root";
import { createMemoryRouter } from "react-router-dom";

import MoviesCategoriesPage from "@/pages/movies-categories-page";
import MyTicketPage from "@/pages/my-ticket-page";
import MoviePage from "@/pages/movie-page";
import MoviesPage from "@/pages/movies-page";

const router = createMemoryRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <MoviesCategoriesPage />,
            },
            {
                path: "/movies/:id",
                element: <MoviesPage />,
            },
            {
                path: "/my-ticket",
                element: <MyTicketPage />,
            },
            {
                path: "/movie",
                element: <MoviePage />,
            },
        ],
    },
]);

export default router;
