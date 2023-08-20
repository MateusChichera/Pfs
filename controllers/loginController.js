class LoginController {


    loginView(req, res) {
        res.render('login/login', {layout: 'login/login'}); // SEM EJS LAYOUT SOBRESCEVENDO O VALOR DO LAYOUT
    }
    login(req, res){
        console.log(req.body)
        let msg = "";
        
        if(req.body.usuarioEmail == "mateus@infomaster.inf.br" && req.body.usuarioSenha == "123") {
            msg = "Usuario logado com sucesso!"
            res.redirect('/');
        }
        else{
            msg = "Login ou senha incorretos"
        }

        res.render("login/login", {msg: msg, layout: 'login/login'});
    }

}

module.exports = LoginController