import express from 'express';
import { PORT_LOCAL } from './config.js';
import  userRouter  from './routes/users.routes.js';
import morgan from 'morgan';
import cors from 'cors'


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(userRouter);



app.listen(PORT_LOCAL);
console.log("Servidor en puerto", PORT_LOCAL);