import 'dotenv/config'
import { Context, Hono } from 'hono';
import { cors } from "hono/cors"
import { env } from './config/env';
import { serve } from '@hono/node-server';
import routes from './routes';


const app = new Hono();

app.use("*", async (c: Context, next) => {
  c.env = { ...env }
  await next()
})

//これで異なるドメイン(フロントエンド)からのリクエストを許可する
app.use(
  "/*",
  cors({
    origin: [env.FRONTEND_URL],
  }),
)

app.route("/api/v1.0", routes)

try {
  console.debug(`Server is running on port ${env.PORT}`)

  serve({
    fetch: app.fetch,
    port: env.PORT,
  })
} catch (error) {
  if (error instanceof Error) {
    console.error("Failed to start server:", error.message)
  } else {
    console.error("Failed to start server:", error)
  }
  process.exit(1)
}

export type AppType = typeof app

