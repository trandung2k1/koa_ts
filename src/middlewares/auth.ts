import { Context, Next } from 'koa';

export const verifyToken = async (ctx: Context & { userId: string }, next: Next) => {
    ctx.userId = '123';
    await next();
};
