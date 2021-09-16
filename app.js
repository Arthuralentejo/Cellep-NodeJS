//importanto o express
const express = require('express')

//criando um objeto express na variavel app

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("Ola Mundo")
})

app.get('/noticias', (req, res) => {
    res.send("Todas as Notícias")
})

app.listen(3000, () => {
    console.log(`Servidor iniciado na porta  3000`)
    console.log("Pressione CTRL + C para encerrar")
})