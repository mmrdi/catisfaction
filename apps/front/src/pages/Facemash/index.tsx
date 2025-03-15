import { useEffect, useState, useCallback } from "react"
import { type Image } from "@shared/types"
import { SidesWrapper, Side } from "./styled"
import { ImageItem } from "../../ui/ImageItem"
import { getImagesDuel, sendDuel } from "../../services/api.service"

const Facemash = () => {
    const [images, setImages] = useState<[Image, Image] | []>([])
    const imageSize = 400

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

    const handleUpVote = useCallback(
        async (image?: Image) => async () => {
            if (!image) {
                throw new Error("Image cannot be handled")
            }
            const loser = images.find(img => img._id !== image._id)
            if (loser && image) {
                await sendDuel({ winnerId: image._id, loserId: loser._id })
                await fetchDuel([image._id, loser._id].join(","))
            }
        },
        [images]
    )

    return (
        <SidesWrapper>
            <Side $separator={true}>
                <ImageItem
                    image={images[0]}
                    onClick={handleUpVote(images[0])}
                    size={imageSize}
                />
            </Side>
            <Side>
                <ImageItem
                    image={images[1]}
                    onClick={handleUpVote(images[1])}
                    size={imageSize}
                />
            </Side>
        </SidesWrapper>
    )
}

export { Facemash }
