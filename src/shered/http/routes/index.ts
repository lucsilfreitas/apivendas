import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {

return response.json({ message:'Ola Teste' });
}

);

export default routes;
