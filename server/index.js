import expess from 'express';
import { connect } from './model/connectdb.js';
import { router } from './routers/indexRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'


connect();
const port = 3030
const app = expess();
app.use(bodyParser.json());
app.use(cors({
  origin:"http://localhost:3000",
  credentials :true

}));

app.use(cookieParser());
dotenv.config();
router(app)
app.listen(port, () => {
  })