import app from "./app"

app.get("/ping", () => {
    console.log("Pong")
})
