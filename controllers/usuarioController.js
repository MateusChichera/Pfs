

const listaUsuarios = [
 
]

class UsuarioController {


    listarView(req, res) {
        res.render('usuario/listar', {lista: listaUsuarios});
    }

    cadastrarView(req, res) {
        res.render('usuario/cadastrar');
    }
    

    cadastrar(req, res) {
        let novoUsuario; // criando um objeto vazio
        if(req.body.perfil=='1'){ // verificado o perfil

            novoUsuario = {  // inserindo dados dentro da variavel
                id: listaUsuarios.length + 1,
                nome: req.body.nome,
                email: req.body.email,
                perfil: "Administrador"
               
            };
        }
        else{
            novoUsuario = {
                id: listaUsuarios.length + 1,
                nome: req.body.nome,
                email: req.body.email,
                perfil: "Recepcionista"
               
            };
        }
      
        listaUsuarios.push(novoUsuario); // colocando os dados da variavel dentro do objeto
        

    }
    excluir(req, res) {
        const userId = req.body.id; //pegando id

       
        const index = listaUsuarios.findIndex(usuario => usuario.id === userId); // acha a pos do usuario

        if (index !== -1) {
            //procurando usuário se encontrar excluir
            listaUsuarios.splice(index, 1); 
            res.sendStatus(204); // resp sem nada para indicar sucesso
        } else {
            res.status(404).send('Usuário não encontrado'); // resp de erro
        }
    }
    




    }

module.exports = UsuarioController;