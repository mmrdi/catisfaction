import { createBrowserRouter, Outlet } from "react-router-dom"

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                index: true,
                path: "/",
                element: <>facemash page</>
            },
            { path: "/top", element: <>Top rated page</> }
        ]
    }
])

export { mainRouter }
