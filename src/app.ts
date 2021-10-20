import 'dotenv/config';
import 'express-async-errors';
import express from "express";
import { router } from './routes';
import { ExceptionHandler } from './middlewares/exceptionHandler';
import { UserAuthenticated } from './middlewares/userAuthenticated';
import { CreateMessageController } from './controllers/CreateMessageController';

const port = process.env.PORT ? process.env.PORT : 3000

const app = express()

app.use(express.json())

app.use(router)

app.post('/newMessage',new UserAuthenticated().execute,new CreateMessageController().handle)

app.get("/github", (req, res, next) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback", (req, res, next) => {
    const { code } = req.query
    res.json({ code })
})

app.use(ExceptionHandler)

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})