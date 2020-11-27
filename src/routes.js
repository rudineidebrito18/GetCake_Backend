const express = require('express')

const ClienteController = require('./controllers/ClienteController')
const EnderecoController = require('./controllers/EnderecoController')
const FuncionarioController = require('./controllers/FuncionarioController')
const TelefoneController = require('./controllers/TelefoneController')
const ProdutoController = require('./controllers/ProdutoController')

const router = express.Router()

router.post('/cliente', ClienteController.create)
router.get('/cliente', ClienteController.index)
router.get('/search/cliente', ClienteController.search)
router.get('/id/cliente', ClienteController.getId)
router.put('/cliente/:id', ClienteController.update)
router.delete('/cliente/:id', ClienteController.delete)

router.post('/telefone', TelefoneController.create)
router.get('/telefone/:id', TelefoneController.index)
router.put('/telefone/:id', TelefoneController.update)
router.delete('/telefone/:id', TelefoneController.delete)

router.post('/produto', ProdutoController.create)
router.get('/produtos', ProdutoController.index)
router.put('/produto/:id', ProdutoController.update)
router.delete('/produto/:id', ProdutoController.delete)

router.post('/endereco', EnderecoController.create)
router.get('/endereco/:id', EnderecoController.index)
router.put('/endereco/:id', EnderecoController.update)
router.delete('/endereco/:id', EnderecoController.delete)

router.post('/funcionario', FuncionarioController.create)
router.get('/funcionario/:id', FuncionarioController.index)
router.put('/funcionario/:id', FuncionarioController.update)
router.delete('/funcionario/:id', FuncionarioController.delete)

module.exports = router
