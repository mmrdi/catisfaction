import { useEffect, useState } from "react"
import { getImages } from "../../services/api.service"

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
        <div>
            <h1>Top Rated Page</h1>
            {images.map((image: any) => (
                <div>{image.id}</div>
            ))}
        </div>
    )
}

export { TopRated }
