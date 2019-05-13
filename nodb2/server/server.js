const express = require('express')
const ctrl = require('./controller/DataCtrl')


const app = express()
const SERVER_PORT = 5000

app.use(express.json())

app.get('/api/legislature', ctrl.getLegislatureByState)
app.get('/api/legislatures', ctrl.getAll)

app.put('/api/legislature/:id', ctrl.updateLegislature)

app.post('/api/legislature', ctrl.createLegislature)

app.delete('/api/legislature/:id', ctrl.deleteLegislature)

app.listen(SERVER_PORT, () => {
    console.log(`the magic is happening on ${SERVER_PORT}`)
})