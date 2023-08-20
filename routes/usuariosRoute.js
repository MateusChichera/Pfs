const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

class UsuarioRoute {

    #router
    get router() {
        return this.#router;
    }

    set router(router) {
        this.#router = router;
    }

    constructor() {

        this.#router = express.Router();
        let controller = new UsuarioController();
        this.#router.get("/", controller.listarView);
        this.#router.get("/cadastrar", controller.cadastrarView);
        this.#router.post("/cadastrar", controller.cadastrar);
    }
}

module.exports = UsuarioRoute