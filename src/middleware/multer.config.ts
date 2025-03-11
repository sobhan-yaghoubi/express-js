import { uploadDir } from "@/src/config"
import path from "path"
import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir)
  },
  filename: (req, file, callback) => {
    const timestamp = Date.now()
    const extname = path.extname(file.originalname)
    callback(null, `${timestamp}-${extname}`)
  },
})

const upload = multer({ storage })

export default upload
