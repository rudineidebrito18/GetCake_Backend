const express = require('express')
const caixaController = require('./controllers/CaixaController')
const clienteController = require('./controllers/ClienteController')
const empresaController = require('./controllers/EmpresaController')
const enderecoController = require('./controllers/EnderecoController')
const estoqueController = require('./controllers/EstoqueController')
const fornecedorController = require('./controllers/FornecedorController')
const telefoneController = require('./controllers/TelefoneController')

const router = express.Router()

router.post('/cliente', clienteController.create)
router.get('/cliente', clienteController.index)
router.put('/cliente/:id', clienteController.update)
router.delete('/cliente/:id', clienteController.delete)

router.post('/empresa', empresaController.create)
router.get('/empresa', empresaController.index)
router.put('/empresa/:id', empresaController.update)
router.delete('/empresa/:id', empresaController.delete)

router.post('/caixa', caixaController.create)
router.get('/caixa/:id', caixaController.index)
router.put('/caixa/:id', caixaController.update)
router.delete('/caixa/:id', caixaController.delete)

router.post('/estoque', estoqueController.create)
router.get('/estoque/:id', estoqueController.index)
router.put('/estoque/:id', estoqueController.update)
router.delete('/estoque/:id', estoqueController.delete)

router.post('/fornecedor', fornecedorController.create)
router.get('/fornecedor/:id', fornecedorController.index)
router.put('/fornecedor/:id', fornecedorController.update)
router.delete('/fornecedor/:id', fornecedorController.delete)

router.post('/telefone', telefoneController.create)
router.get('/telefone/:id', telefoneController.index)
router.put('/telefone/:id', telefoneController.update)
router.delete('/telefone/:id', telefoneController.delete)

router.post('/endereco', enderecoController.create)
router.get('/endereco/:id', enderecoController.index)
router.put('/endereco/:id', enderecoController.update)
router.delete('/endereco/:id', enderecoController.delete)

module.exports = router