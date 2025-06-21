const express = require('express')
const router = express.Router()

// Rota POST
router.post('/login', (req, res) => {
    const { email, senha } = req.body

    // Verificação se os dois campos foram enviados
    if (!email || !senha) {
        return res.status(400).json({ mensagem: 'Email e senha obrigatórios. '})
    }

    // Verifica se email e senha batem com os valores de teste
    if (email === 'admin@email.com' && senha === '123456') {
        return res.status(200).json({ mensagem: 'Login realizado com sucesso!' })
    } else {
        return res.status(401).json({ mensagem: 'Credenciais inválidas.'})
    }
})

// Rota GET
router.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'John', email: 'john@email.com' },
        { id: 2, nome: 'Wick', email: 'wick@email.com' }
    ])
})

module.exports = router