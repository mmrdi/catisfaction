import { Outlet } from "react-router-dom"
import { BottomNavigator } from "../../ui/BottomNavigator"
import { useEffect } from "react"
import { healthCheck } from "../../services/api.service"

const Layout = () => {
    useEffect(() => {
        healthCheck().then(res => console.log(res))
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <Outlet />
            <BottomNavigator />
        </div>
    )
}

export { Layout }
