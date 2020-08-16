// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal

app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

// Ruta Admin

app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})


// Ruta Nueva Historia

app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})

// Ruta Academico

app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | academico"
    res.render('academico.ejs', {title: title} )
})

// Ruta Institucional

app.get('/institucional', (req, res) => {
    var title = app.get('appName')+" | Institucional"
    res.render('institucional.ejs', {title: title} )
})

// Ruta Expotecnica

app.get('/expotecnica', (req, res) => {
    var title = app.get('appName')+" | Expotecnica"
    res.render('expotecnica.ejs', {title: title} )
})

// Ruta Intercolegial

app.get('/intercolegial', (req, res) => {
    var title = app.get('appName')+" | Intercolegial"
    res.render('intercolegial.ejs', {title: title} )
})

// Ruta Contactos

app.get('/contactos', (req, res) => {
    var title = app.get('appName')+" | Contactos"
    res.render('contactos.ejs', {title: title} )
})

// Ruta Noticias

app.get('/noticias', (req, res) => {
    var title = app.get('appName')+" | Noticias"
    res.render('noticias.ejs', {title: title} )
})

// Ruta Admisiones

app.get('/admisiones', (req, res) => {
    var title = app.get('appName')+" | Admisiones"
    res.render('admisiones.ejs', {title: title} )
})
// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
