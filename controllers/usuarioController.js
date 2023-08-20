

class UsuarioController {

    listarView(req, res) {
        res.render('usuarios/listagem');
    }

    cadastrarView(req, res) {
        res.render('usuarios/cadastrar');
    }

    cadastrar(req, res){
        console.log(req.body)
        let msg = "";
        if(req.body.usuarioEmail != "" && req.body.usuarioSenha != "" && req.body.usuarioNome != "" && req.body.usuarioPerfil != "0") {
            msg = "Usuario cadastrado!"
        }
        else{
            msg = "Preencha os campos corretamente!"
        }

        res.render("usuarios/cadastrar", {msg: msg});
    }

}

module.exports = UsuarioController