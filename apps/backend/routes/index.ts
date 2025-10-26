import { Hono } from "hono"
import dashboardRoutes from "./dashboard"

const routes = new Hono()

routes.route("", dashboardRoutes)

export default routes