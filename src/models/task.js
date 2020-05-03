const mongoose = require('mongoose')
// uso la clase Schema para crear el esquema
const { Schema } = mongoose

// defino mi esquema (cómo van a lucir mis datos)
const TaskSchema = Schema ({
    title: { type: String, required: true},
    description: { type: String, required: true}
})

// estableco el modelo y el nombre para reusarlo. Es una clase js con características mongo
module.exports = mongoose.model('Task', TaskSchema)