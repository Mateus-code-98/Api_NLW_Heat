import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors'
import http from 'http';
import { Server, Socket } from "socket.io";
import express from "express";
import { router } from './routes';
import { ExceptionHandler } from './middlewares/exceptionHandler';

const port = process.env.PORT ? process.env.PORT : 3000

const app = express()

app.use(express.json())

app.use(router)

app.use(ExceptionHandler)

app.use(cors)

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
})

io.on("connection", socket => {
    console.log(`Usuaário conectado no socket ${socket.id}`)
    socket.on("disconnect", () => {
        console.log("Usuário desconectado")
    })
})

export { serverHttp, io, port }