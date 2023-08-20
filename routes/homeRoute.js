const express = require('express');
const HomeController = require('../controllers/homeController');

class HomeRoute {

    #router

    get router() {
        return this.#router;
    }
    set router(router){
        this.#router = router;
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new HomeController
        this.#router.get("/", ctrl.homeView)
        this.#router.get("/teste", ctrl.testeView)
    }
}

module.exports = HomeRoute;