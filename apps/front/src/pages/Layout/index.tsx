import { Outlet } from "react-router-dom"
import { BottomNavigator } from "../../ui/BottomNavigator"

const Layout = () => {
    return (
        <div style={{ display: "flex" }}>
            <Outlet />
            <BottomNavigator />
        </div>
    )
}

export { Layout }
