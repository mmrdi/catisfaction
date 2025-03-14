import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, path.join(process.cwd(), "../../"), "VITE_")
    const defineEnv = Object.keys(env).reduce(
        (acc: Record<any, string>, key) => {
            acc[`import.meta.env.${key}`] = JSON.stringify(env[key])
            return acc
        },
        {}
    )

    return {
        plugins: [react()],
        define: defineEnv
    }
})
