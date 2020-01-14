const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();


//Metodos HTTP: get, post, put, delete 

//Tipos de parametros:
// Query params:req.query(filtros, ordernacao, paginacao,...)
// Route params: request.params(identificar um recurso na alteracao ou remocao)
// Body:request.body (dados para criacao ou alteracao de um registro)

//MongoDB (não-relacional)


routes.post('/devs', async (request, response) => {
    const {github_username, techs} = request.body;

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = api_response.data;

    const techs_array = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techs_array,
    });

    return response.json(dev);
});

module.exports = routes;