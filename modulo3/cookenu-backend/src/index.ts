import app from "./app"
import { userRouter } from "./router/userRouter"


app.get("/ping", () => {
    console.log("Pong")
})
app.use("/users", userRouter)