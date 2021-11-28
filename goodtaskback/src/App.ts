import express from "express";
import setupMiddlewares from "./config/middlewares";
import router from "./config/router";
import dotenv from 'dotenv'
var cors = require('cors')


const app = express();

dotenv.config()
setupMiddlewares(app)


app.use(cors())

app.use('/api', router)


export default app
