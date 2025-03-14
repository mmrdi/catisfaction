import { z } from "zod"

type Config = {
    API_PORT: number
}

const envSchema = z.object({
    API_PORT: z.preprocess(value => Number(value), z.number())
})

const validateEnv = () => {
    const parseEnv = envSchema.safeParse(process.env)

    if (parseEnv.error) {
        console.error(parseEnv.error.format())
        throw new Error(
            "Invalid environment variables. Please check your .env file at root directory"
        )
    }

    return parseEnv.data
}

const config: Config = validateEnv()

export { config }
