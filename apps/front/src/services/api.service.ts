import ky from "ky"
import { type Image } from "@shared/types"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_URI })

const healthCheck = (): Promise<boolean> =>
    api
        .get("api/healthcheck")
        .then(response => response.ok)
        .catch(() => false)

const getImages = (): Promise<Image[]> =>
    api
        .get("api/images")
        .then(response => response.json() as Promise<Image[]>)
        .catch(err => {
            console.log(err)
            return []
        })

const getImagesDuel = (excludeIds?: string) =>
    api
        .get(`api/images/duel`, {
            ...(excludeIds && { searchParams: excludeIds })
        })
        .then(
            response =>
                response.json() as Promise<{
                    data: Image[]
                    meta: { particitpations: number }
                }>
        )
        .catch(err => {
            console.log(err)
            return { data: [], meta: { participations: 0 } }
        })

const sendDuel = (data: { winnerId: string; loserId: string }) =>
    api
        .patch("api/images/duel", { json: data })
        // .then(response => response.json() as Promise<Image>)
        .catch(err => {
            console.log(err)
            return null
        })

export { healthCheck, getImages, getImagesDuel, sendDuel }
