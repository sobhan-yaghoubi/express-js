import express, { Request, Response } from "express"

const app = express()
const PORT = 8000

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Project is Running on https://localhost:${PORT}`)
})
