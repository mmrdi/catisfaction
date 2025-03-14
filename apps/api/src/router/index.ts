import { Response, Router } from "express"

const router: Router = Router()

router.get("/healthcheck", (_, res: Response<boolean>) => {
    res.status(200).json(true)
})

export { router }
