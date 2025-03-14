import { z } from "zod"

type Config = {
    API_PORT: number
    MONGODB_URI: string
}

const envSchema = z.object({
    API_PORT: z.preprocess(value => Number(value), z.number()),
    MONGODB_URI: z.string().url()
})

/**
 * @description checks the conformity of environment variables
 * @returns object from .env
 */
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
