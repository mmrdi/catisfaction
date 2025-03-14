import { SidesWrapper, Side } from "./styled"

const Facemash = () => {
    return (
        <>
            <SidesWrapper>
                <Side $separator={true}>
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
