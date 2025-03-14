import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })

import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(5100, () => console.log("Server listening on port 5100"))
