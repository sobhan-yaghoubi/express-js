import app from "@/src/app"
import { PORT } from "./config"

app.listen(PORT, () => {
  console.log(`Server Is Running http://localhost:${PORT}`)
})
