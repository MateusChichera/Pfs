const express = require('express');
const LoginController = require('../controllers/loginController');

class LoginRoute {
    #router
    get router() {
        return this.#router;
    }

    set router(router) {
        this.#router = router;
    }

    constructor() {

        this.#router = express.Router();
        let controller = new LoginController();
        this.#router.get("/login", controller.loginView);
        this.#router.post("/login", controller.login);
    }
}

module.exports = LoginRoute