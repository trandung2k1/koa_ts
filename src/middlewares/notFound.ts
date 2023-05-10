import { Context } from 'koa';
const notFound = (ctx: Context) => {
    ctx.status = 404;
    ctx.body = {
        status: 404,
        message: `Router ${ctx.originalUrl} not found`,
    };
};
export default notFound;
