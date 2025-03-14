import { useEffect, useState } from "react"
import { FaHeart } from "react-icons/fa"
import { ImageItem } from "../../ui/ImageItem"
import { getImages } from "../../services/api.service"
import { Gallery } from "./styled"

const TopRated = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        ;(async () => {
            const data: any = await getImages()
            if (data?.length) {
                setImages(data)
            }
        })()
    }, [])

    return (
        <div style={{ flex: 1 }}>
            <h1>Top Rated Page</h1>
            <Gallery size="400px">
                {images.map((image: any) => (
                    <ImageItem image={image} key={image.id} />
                ))}
            </Gallery>
        </div>
    )
}

export { TopRated }
