//importanto o express
const express = require('express')

//criando um objeto express na variavel app
const app = express()

app.set('view engine', 'ejs')

const noticias = require('./mockup.js')
    //Criando o a primeira rota
app.get('/', (req, res) => {
    res.render("home/index", {
        noticias: noticias.slice(0, 3),
        title: 'Home'
    })
})

//Criando o a segunda rota
app.get('/noticias', (req, res) => {
    res.send("Todas as Notícias")
})

//Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log(`Servidor iniciado na porta  3000`)
    console.log("Pressione CTRL + C para encerrar")
})