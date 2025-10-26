import { Hono } from 'hono';

const dashboardRoutes = new Hono();

dashboardRoutes.get('/dashboard', (c) => {
  return c.text('Hono Response "dashboard"');
});

export default dashboardRoutes;
