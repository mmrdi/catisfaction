import { FaHeart } from "react-icons/fa"
import { type Image } from "@shared/types"

const ImageItem = ({ image }) => {
    return (
        <div>
            <img src={image.url} alt={image.id} />
            <div>
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
            </div>
        </div>
    )
}

export { ImageItem }
