import { FaHeart } from "react-icons/fa"
import { type Image } from "@shared/types"
import logo from "../../assets/cat.png"
import { ImageStyled } from "./styled"

const ImageItem = ({
    image,
    onClick,
    size = 200
}: {
    image?: Image
    onClick?: Promise<() => Promise<void>>
    size: number
}) => {
    const handleClick = async () => {
        if (onClick) {
            const clickHandler = await onClick
            clickHandler()
        }
    }

    return (
        <ImageStyled onClick={onClick && handleClick} size={size}>
            <img src={image?.url || logo} alt={image?.id} />
            <div>
                {image && (
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5
                        }}
                    >
                        {image.upvotes}
                        <FaHeart />
                    </span>
                )}
            </div>
        </ImageStyled>
    )
}

export { ImageItem }
