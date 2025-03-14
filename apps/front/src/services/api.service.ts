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

export { healthCheck, getImages }
