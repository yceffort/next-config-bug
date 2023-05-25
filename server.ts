import next from 'next'
import Koa from 'koa'
import mount from 'koa-mount'
import getConfig from "next/config";
async function main() {
    const nextApp = next({dev: false})
    await nextApp.prepare()
    const nextAppHandler = nextApp.getRequestHandler()

    const app = new Koa()

    const config = getConfig()

    console.log("config >>>>>>>>>>>", config)

    app.use(
        mount('/', (ctx) => {
            ctx.respond = false
            nextAppHandler(ctx.req, ctx.res)
        }),
    )

    app.listen(3000)
}

main()