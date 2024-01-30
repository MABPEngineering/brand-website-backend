import { Hono } from 'hono';

const app = new Hono();

const users = [
  {
    id: 1,
    name: 'Max',
  },
  {
    id: 2,
    name: 'Adrian',
  },
  {
    id: 2,
    name: 'Roma',
  },
];

app.get('/users', (c) => {
  return c.json(users);
});

export default {
  port: 4001,
  fetch: app.fetch,
};
