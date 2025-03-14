import { createBrowserRouter } from "react-router-dom"
import { Layout } from "../pages/Layout"
import { Facemash } from "../pages/Facemash"
import { TopRated } from "../pages/TopRated"

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                path: "/",
                element: <Facemash />
            },
            { path: "/top", element: <TopRated /> }
        ]
    }
])

export { mainRouter }
