import { Router } from "express"
import { uploadImage, removeAllImages } from "../controllers/image.controller"
import upload from "@/src/middleware/multer.config"

const router = Router()

router.post("/upload", upload.single("image"), uploadImage)
router.delete("/removeAllImages", removeAllImages)

export default router
