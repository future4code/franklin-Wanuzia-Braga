import { Router } from "express";
import { UserBusiness } from "../business/Userbusiness";
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator(),
        new IdGenerator(),
        new HashManager()
    )
)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/profile", userController.getOwnProfile)
userRouter.get("/:id", userController.getProfileByUserId)
userRouter.delete("/:id", userController.deleteUser)
userRouter.post("/follow", userController.followUser)
userRouter.post("/unfollow", userController.unFollowUser)