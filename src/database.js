const mongoose = require('mongoose')

// conexión por medio del protocolo "mongodb" localmente a la base de datos mern-tasks. Las ultimas dos opciones que se les pasa al connect están ahí para que la consola no pase un warning
const URI = 'mongodb://localhost/mern-tasks'
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( db => console.log('BASE DE DATOS: Conectada') )
    .catch( err => console.log(err))

module.exports = mongoose