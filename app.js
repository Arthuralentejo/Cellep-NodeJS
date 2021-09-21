// importando o express
const express = require('express')
    //criando um objeto express na variável app
const app = express()
    //configurando a ejs
app.set('view engine', 'ejs')
    //definindo o caminho da views wjs
app.set('views', './app/views')
    //configuracoes de arquivos estáticos
app.use(express.static('./app/public'))

const noticias = require('./mockup.js')

app.get('/', (req, res) => {
    res.render("home/index", { noticias: noticias.slice(0, 3), title: 'Home' })
})
app.get('/noticia', (req, res) => {
    var id = req.query.id
    res.render('noticias/noticia', { noticia: noticias[id], title: 'noticia' })
})

app.get('/noticias', (req, res) => {
    var id = req.query.id
    res.render("noticias/noticias", { noticias: noticias, title: 'noticias' })
})

app.get('/admin', (req, res) => {
    res.render("admin/form_add_noticia", { title: 'admin' })
})


app.listen(3000, () => {
    console.log('Escutando na porta 3000')
    console.log('Pressione CRTL+C para encerrar o servidor')
})