import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ message: 'Programs is OnLine Again' }),
);

export default routes;
