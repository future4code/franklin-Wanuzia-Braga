import app from "./app"
import { recipeRouter } from "./router/recipeRouter"
import { userRouter } from "./router/userRouter"


app.get("/ping", () => {
    console.log("Pong")
})
app.use("/users", userRouter)
app.use("/recipes", recipeRouter)