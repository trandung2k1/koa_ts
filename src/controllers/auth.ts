import { Context } from 'koa';
const authorController = {
    login: async (ctx: Context & { userId: string }) => {
        try {
            ctx.status = 200;
            return (ctx.body = {
                message: 'Login',
            });
        } catch (error) {
            if (error instanceof Error) {
                ctx.status = 500;
                return (ctx.body = {
                    message: error.message,
                });
            }
        }
    },
};

export default authorController;
