import { Hono } from "hono";

const dashboardRoutes = new Hono().get("/dashboard", c => {
  return c.json({ message: 'Hono Response "dashboard"' });
});

export default dashboardRoutes;
