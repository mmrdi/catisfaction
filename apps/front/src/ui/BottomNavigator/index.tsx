import { Link, useLocation } from "react-router-dom"
import { BNStyled } from "./styled"

const BottomNavigator = () => {
    const location = useLocation()

    const routes = [
        { path: "/", name: "Revenir aux votes" },
        { path: "/top", name: "Voir le classement des chats" }
    ].filter(({ path }) => path !== location.pathname)

    return (
        <BNStyled>
            <div>
                {routes?.map((route, index) => (
                    <Link key={index} to={route.path}>
                        {route.name}
                    </Link>
                ))}
            </div>
            <div>{0} matchs joués</div>
        </BNStyled>
    )
}

export { BottomNavigator }
