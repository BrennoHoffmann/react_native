const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();


//Metodos HTTP: get, post, put, delete 

//Tipos de parametros:
// Query params:req.query(filtros, ordernacao, paginacao,...)
// Route params: request.params(identificar um recurso na alteracao ou remocao)
// Body:request.body (dados para criacao ou alteracao de um registro)

//MongoDB (não-relacional)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;