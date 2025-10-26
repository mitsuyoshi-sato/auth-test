import { Hono } from "hono";
import dashboardRoutes from "./dashboard";

const routes = new Hono().route("", dashboardRoutes);

export type AppType = typeof routes;
export default routes;
