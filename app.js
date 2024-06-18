import 'dotenv/config'

import express from "express";
import bodyParser from "body-parser";
import http from "http";
import cors from "cors"
import Connection from "./DB/Database.js";
import router from "./Routes/Route.js";
const app = express()
const server = http.createServer(app)

app.use(cors({
    origin: 'https://deft-centaur-2b5150.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  }));

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

Connection()

app.use('/', router)

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>{
    console.log('server is running on ', PORT )
})
