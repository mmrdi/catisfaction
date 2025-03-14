import ky from "ky"

const api = ky.create({ prefixUrl: import.meta.env.VITE_API_URI })

const healthCheck = (): Promise<boolean> =>
    api
        .get("api/healthcheck")
        .then(response => response.ok)
        .catch(() => false)

export { healthCheck }
