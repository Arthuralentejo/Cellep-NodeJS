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
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const noticias = require('./mockup.js')

const dbConnection = require('./dbConnection')
app.get('/', async(req, res) => {
    //Consulta SQL
    var result = await dbConnection.query('SELECT * FROM noticias order by id_noticia desc limit 3')
    res.render("home/index", { noticias: result.rows, title: 'Home' })
})
app.get('/noticia', async(req, res) => {
    var id = req.query.id
    let result = await dbConnection.query('SELECT * FROM noticias where id_noticia = $1', [id])

    res.render('noticias/noticia', { noticia: result.rows[0], title: 'noticia' })
})

app.get('/noticias', async(req, res) => {

    var result = await dbConnection.query('SELECT * FROM noticias order by id_noticia desc')

    res.render("noticias/noticias", { noticias: result.rows, title: 'noticias' })
})

app.post('/admin/salvar-noticia', async(req, res) => {
    let { titulo, conteudo } = req.body
    await dbConnection.query('INSERT INTO noticias (titulo, conteudo) VALUES($1,$2)', [titulo, conteudo], (err, result) => {
        res.redirect('/noticias')
    })

})

app.get('/admin', (req, res) => {
    res.render("admin/form_add_noticia", { title: 'admin' })
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Escutando na porta 3000')
    console.log('Pressione CRTL+C para encerrar o servidor')
})