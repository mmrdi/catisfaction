import { useEffect, useState } from "react"
import { ImageItem } from "../../ui/ImageItem"
import { getImages } from "../../services/api.service"
import { Gallery } from "./styled"
import { type Image } from "@shared/types"

const TopRated = () => {
    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        ;(async () => {
            const data = await getImages()
            if (data?.length) {
                setImages(data)
            }
        })()
    }, [])

    return (
        <div style={{ flex: 1, paddingTop: 150 }}>
            <h1>Top Rated Page</h1>
            <Gallery size="400px">
                {images.map(image => (
                    <ImageItem image={image} key={image.id} />
                ))}
            </Gallery>
        </div>
    )
}

export { TopRated }
