import { Outlet } from "react-router-dom"
import { BottomNavigator } from "../../ui/BottomNavigator"
import { useEffect } from "react"
import { healthCheck } from "../../services/api.service"
import { LogoWrapper } from "./styled"
import logo from "../../assets/cat.png"

const Layout = () => {
    useEffect(() => {
        healthCheck().then(res => console.log(res))
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <LogoWrapper>
                <img src={logo} alt="logo-catisfactiob" />
                <div>Catisfaction</div>
            </LogoWrapper>
            <Outlet />
            <BottomNavigator />
        </div>
    )
}

export { Layout }
