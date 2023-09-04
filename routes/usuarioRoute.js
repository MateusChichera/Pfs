const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

class UsuarioRoute {

    #router;

    get router(){
        return this.#router;
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new UsuarioController();
        this.#router.get('/', ctrl.listarView);
        this.#router.get('/cadastrar', ctrl.cadastrarView);
        this.#router.post('/cadastrar', ctrl.cadastrar) // ROTA PARA CADASTRAR O USUÁRIO
        this.#router.post('/excluir', ctrl.excluir) // CRIANDO A ROTA PARA EXCLUIR O USUÁRIO
    }
}

module.exports = UsuarioRoute