const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const HomeRoute = require('./routes/homeRoute');
const UsuarioRoute = require('./routes/usuariosRoute');
const LoginRoute = require('./routes/loginRoute');

const app = express()

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout', './layout')


app.use(express.urlencoded())
app.use(express.static("public/"))
app.use(ejsLayout);

let homeRota = new HomeRoute();
app.use('/', homeRota.router);
let usuarioRota = new UsuarioRoute();
app.use('/usuarios', usuarioRota.router);
let loginRota = new LoginRoute();
app.use('/login', loginRota.router);

app.listen('5000', function () {
    console.log("servidor web iniciado")
})