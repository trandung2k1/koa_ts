import Koa from 'koa';
import dotenv from 'dotenv';
dotenv.config();
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import { mkdirp } from 'mkdirp';
import morgan from 'koa-morgan';
import fs from 'fs';
import { koaBody } from 'koa-body';
import notFound from './middlewares/notFound';
import author from './routes/auth';
import connectDB from './db/mongodb';
const port: number = +process.env.PORT! || 4000;
const isProduction = process.env.NODE_ENV === 'production';
mkdirp.sync('src/logs');
const accessLogStream = fs.createWriteStream(__dirname + '/logs/logger.log', {
    flags: 'a',
});
const app: Koa = new Koa();
app.use(koaBody());
app.use(cors());
app.use(helmet());
app.use(isProduction ? morgan('combined', { stream: accessLogStream }) : morgan('tiny'));
app.use(author.routes()).use(author.allowedMethods());
app.use(notFound);
app.listen(port, async () => {
    await connectDB();
    console.log(`Server listening on http://localhost:${port}`);
}).on('error', (err: Error) => {
    console.log(err);
});
