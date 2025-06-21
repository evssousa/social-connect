const express = require('express')
const cors = require('cors')
const rotaUsuarios = require('./routers/usuarios')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api', rotaUsuarios)

app.get('/', (req, res) => {
    res.send('API Social Connect rodando!')
})

app.listen(port, () => {
    console.log(`Servidor backend iniciado em http://localhost:${port}`)
})