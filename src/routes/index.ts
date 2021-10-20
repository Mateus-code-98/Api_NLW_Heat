import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLast3MessagesController } from "../controllers/GetLast3MessagesController";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { UserAuthenticated } from "../middlewares/userAuthenticated";

const router = Router();

router.get("/profile", UserAuthenticated, ProfileUserController)

router.get("/messages/last3", GetLast3MessagesController)

router.post("/authenticate", AuthenticateUserController)

router.post('/newMessage', UserAuthenticated, CreateMessageController)

router.get("/github", (req, res, next) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

router.get("/signin/callback", (req, res, next) => {
    const { code } = req.query
    res.json({ code })
})

export { router }