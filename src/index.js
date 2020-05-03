const express = require('express')
// morgan permiten visualizar peticiones realizadas por el usuario en la consola
const morgan = require('morgan')
// permite crear rutas pare el sistema operativo que estemos a partir de un string. Esto hace que las contra barras \ de windows no molesten
const path = require('path')
const { mongoose } = require('./database')
const app = express()

// --------------------
// ::: Configuración :::
// --------------------

// Toma el puerto que el servidor me asigne ( como puede hacerlo un servidor en la nube) o usar 3000 y almacenarlo en la variable 'port'
app.set('port', process.env.PORT || 3000 ) 


// --------------------
// ::: Middleware :::  se ejecutan antes de las rutas
// --------------------

// "dev" es un mensaje con un formato de texto en consola
app.use(morgan('dev'))
// Por defecto el servidor no le presta a tención a ningún tipo de dato. ".json()" devuelve un middleware que le permite a express reconocer formato json en lo que envía el cliente
app.use(express.json())
// permite identificar formData como parámentro que se reciben del cliente
app.use(express.urlencoded())


// --------------------
// ::: Routes :::
// --------------------

// obtenemos un router que está siendo exportado en 'task.routes.js'
// app.use(require('./routes/task.routes'))
// anteponemos '/get/task' como puerta de entrada a las rutas definidas en 'task.routes'
app.use('/get/task',require('./routes/task.routes'))


// --------------------
// ::: Static files :::
// --------------------

// Permite crear archivos estáticos apuntando por defecto a la carpeta "/public"
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))


// --------------------
// ::: Starting server :::
// --------------------
app.listen(app.get('port'), () =>{
    console.log(`servidor en el puerto ${app.get('port')}`)
})