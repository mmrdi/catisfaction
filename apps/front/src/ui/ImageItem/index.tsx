import { FaHeart } from "react-icons/fa"

const ImageItem = ({ image }) => {
    return (
        <div>
            <img src={image.url} alt={image.name} />
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
