import logo from "../../assets/cat.png"
import { LogoWrapper, SidesWrapper, Side } from "./styled"

const Facemash = () => {
    return (
        <>
            <LogoWrapper>
                <img src={logo} alt="logo-catisfactiob" />
                <div>Catisfaction</div>
            </LogoWrapper>

            <SidesWrapper>
                <Side separator={true}>
                    <h2>chat 1</h2>
                </Side>
                <Side>
                    <h2>chat 2</h2>
                </Side>
            </SidesWrapper>
        </>
    )
}

export { Facemash }
