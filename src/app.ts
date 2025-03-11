// import express, { Request, Response } from "express"
// import path from "path"
// import fs from "fs"
// import multer from "multer"

// const app = express()
// const PORT = 8000

// const uploadDir = path.join(__dirname, "public", "images")
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true })
// }

// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, uploadDir)
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname))
//   },
// })

// const upload = multer({ storage })
// app.post("/upload", upload.single("image"), (req: Request, res: Response) => {
//   if (!req.file) {
//     res.status(400).json({ message: "No File Uploaded !!" })
//   }

//   res.json({
//     message: "File Uploaded Successfully",
//     filename: req.file.filename,
//     path: `/images/${req.file.filename}`,
//   })
// })

// app.post("/removeAllImages", (_: Request, res: Response) => {
//   try {
//     if (fs.existsSync(uploadDir)) {
//       fs.readdirSync(uploadDir).forEach((file) => {
//         fs.unlinkSync(path.join(uploadDir, file))
//       })
//     }
//     res.status(200).json({ message: "Images Removed Successfully" })
//   } catch (error) {
//     res.status(500).json({ message: "Failed To Remove Images", error })
//   }
// })

// app.use("/images", express.static(uploadDir))

// app.get("/", (_: Request, res: Response) => {
//   res.send("Hello World")
// })

// app.listen(PORT, () => {
//   console.log(`Project is Running on https://localhost:${PORT}`)
// })

// curl -X POST http://localhost:3000/upload \
// -F "image=@path/to/your/image.jpg"

// curl -X DELETE http://localhost:3000/removeAllImages

import express from "express"
import { uploadDir } from "./config"
import imagesRoutes from "@/src/routes/image.routes"
const app = express()

app.use("/images", express.static(uploadDir))

app.use("/images", imagesRoutes)

app.get("/", (_, res) => {
  res.send("Hello World")
})

export default app
