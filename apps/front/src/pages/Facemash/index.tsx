import { useEffect, useState } from "react"
import { type Image } from "@shared/types"
import { SidesWrapper, Side } from "./styled"
import { ImageItem } from "../../ui/ImageItem"
import { getImagesDuel } from "../../services/api.service"

const Facemash = () => {
    const [images, setImages] = useState<[Image, Image] | []>([])

    const fetchDuel = async (excludeIds?: string) => {
        const data = await getImagesDuel(excludeIds)
        const items = data?.data as [Image, Image] | undefined

        if (items?.length) {
            setImages(items)
        }
    }

    useEffect(() => {
        fetchDuel()
    }, [])

    const handleUpVote = (image?: Image) => async () => {
        if (!image) {
            throw new Error("Image cannot be handled")
        }
        const mashed = images.find(img => img._id !== image._id)
        if (mashed && image) {
            fetchDuel([image._id, mashed._id].join(","))
        }
    }

    return (
        <SidesWrapper>
            <Side $separator={true}>
                <ImageItem
                    image={images[0]}
                    onClick={handleUpVote(images[0])}
                    size={400}
                />
            </Side>
            <Side>
                <ImageItem
                    image={images[1]}
                    onClick={handleUpVote(images[1])}
                    size={400}
                />
            </Side>
        </SidesWrapper>
    )
}

export { Facemash }
