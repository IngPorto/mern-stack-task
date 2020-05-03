// se requiere express no para crear un servidor sino para crear una ruta
const express = require('express')
const router = express.Router()

// obtengo el modelo de la bd necesario para manipular "tablas" o "colecciones" que estén en mi bd mongo
const Task = require('../models/task')

// GET: Raíz
router.get('/', async (req, res) =>{
    // Task.find( (err, tasks) => console.log(tasks) ) // Otra forma de hacerlo
    // res.json({status: 'API works'})
    const task = await Task.find()
    //console.log(task)
    res.send(task)
})

router.get('/:id', async (req, res)=>{
    const task = await Task.findById(req.params.id)
    res.send(task)
})

router.post('/', async (req, res)=>{
    const { title, description } = req.body
    const task = new Task({
        title,
        description
    })
    await task.save()
    res.send({status: 'Tarea guadada'})
})

router.put('/:id', async (req, res)=>{
    const {title, description} = req.body
    const newTask = { title, description }
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.send({status: 'Tarea actualizada'})
})

router.delete('/:id', async (req, res)=>{
    await Task.findOneAndDelete(req.params.id)
    res.send({status: 'Tarea eliminada'})
})

module.exports = router