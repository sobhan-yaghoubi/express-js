import { Application, Request, Response } from "express"
import fs from "fs"
import path from "path"
import { uploadDir } from "@/src/config"

export const ensureUploadDirExist = () => {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }
}

export const uploadImage = (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ message: "No File Uploaded" })
  }
  ensureUploadDirExist()

  const filename = req.file.filename
  res.status(200).json({
    message: "File Uploaded Successfully",
    filename,
    path: `/images/${filename}`,
  })
}

export const removeAllImages = (req: Request, res: Response): void => {
  try {
    if (fs.existsSync(uploadDir)) {
      const files = fs.readdirSync(uploadDir)
      files.forEach((file) => fs.unlinkSync(path.join(uploadDir, file)))
    }
    res.status(200).json({ message: "File Removed Successfully" })
  } catch (error) {
    res.status(500).json({ message: "Failed To Remove Images", error })
  }
}
