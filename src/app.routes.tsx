import { createBrowserRouter } from "react-router";
import { HomeLayout } from "./home/layout/HomeLayout";
import { HomePage } from "./home/page/HomePage";
import { AboutPage } from "./home/page/AboutPage";
import { ContactPage } from "./home/page/ContactPage";
import { RadioLayout } from "./radio/layout/RadioLayout";
import { RadioPage } from "./radio/page/RadioPage";



export const appRoutes = createBrowserRouter([
    //Main routes
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    },
    {
        path: "/radio",
        element: <RadioLayout />,
        children: [
            {
                index: true,
                element: <RadioPage />
            }
        ]
    }
])