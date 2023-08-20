class HomeController {
    
    homeView(req, res) {
        res.render('home/home', 
        {nome: 'fulvio fanelli', carros: 
        ["corolla", "uno", "landau", "marea turbo", "206"] });
    }

    testeView(req, res) {
        res.render('teste',)
    }
}

module.exports = HomeController;