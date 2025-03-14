import ky from "ky"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_URI })

const healthCheck = (): Promise<boolean> =>
    api
        .get("api/healthcheck")
        .then(response => response.ok)
        .catch(() => false)

const getImages = () =>
    api
        .get("api/images")
        .then(response => response.json())
        .catch(err => {
            console.log(err)
        })

export { healthCheck, getImages }
