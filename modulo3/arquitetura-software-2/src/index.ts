import app from "./app"
import { userRouter } from "./router/userRouter"


app.use("/users", userRouter)