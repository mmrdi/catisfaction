import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })

import express from "express"
import cors from "cors"

import { config } from "./config"
import { router } from "./router"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.listen(config.API_PORT, () =>
    console.log(`Server listening on port ${config.API_PORT}`)
)
