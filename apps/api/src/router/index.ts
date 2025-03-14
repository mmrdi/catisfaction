import { Response, Router } from "express"
import { getImages } from "../controllers/image.controller"

const router: Router = Router()

router.get("/healthcheck", (_, res: Response<boolean>) => {
    res.status(200).json(true)
})

router.get("/images", getImages)

export { router }
