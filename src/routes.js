const express = require('express')
const CaixaController = require('./controllers/CaixaController')
const ClienteController = require('./controllers/ClienteController')
const EmpresaController = require('./controllers/EmpresaController')
const EnderecoController = require('./controllers/EnderecoController')
const EstoqueController = require('./controllers/EstoqueController')
const FornecedorController = require('./controllers/FornecedorController')
const FornecedorEmpresaController = require('./controllers/FornecedorEmpresaController')
const FuncionarioController = require('./controllers/FuncionarioController')
const PedidoController = require('./controllers/PedidoController')
const TelefoneController = require('./controllers/TelefoneController')

const router = express.Router()

router.post('/cliente', ClienteController.create)
router.get('/cliente', ClienteController.index)
router.put('/cliente/:id', ClienteController.update)
router.delete('/cliente/:id', ClienteController.delete)

router.post('/empresa', EmpresaController.create)
router.get('/empresa', EmpresaController.index)
router.put('/empresa/:id', EmpresaController.update)
router.delete('/empresa/:id', EmpresaController.delete)

router.post('/caixa', CaixaController.create)
router.get('/caixa/:id', CaixaController.index)
router.put('/caixa/:id', CaixaController.update)
router.delete('/caixa/:id', CaixaController.delete)

router.post('/estoque', EstoqueController.create)
router.get('/estoque/:id', EstoqueController.index)
router.put('/estoque/:id', EstoqueController.update)
router.delete('/estoque/:id', EstoqueController.delete)

router.post('/fornecedor', FornecedorController.create)
router.get('/fornecedor/:id', FornecedorController.index)
router.put('/fornecedor/:id', FornecedorController.update)
router.delete('/fornecedor/:id', FornecedorController.delete)

router.post('/telefone', TelefoneController.create)
router.get('/telefone/:id', TelefoneController.index)
router.put('/telefone/:id', TelefoneController.update)
router.delete('/telefone/:id', TelefoneController.delete)

router.post('/endereco', EnderecoController.create)
router.get('/endereco/:id', EnderecoController.index)
router.put('/endereco/:id', EnderecoController.update)
router.delete('/endereco/:id', EnderecoController.delete)

router.post('/funcionario', FuncionarioController.create)
router.get('/funcionario/:id', FuncionarioController.index)
router.put('/funcionario/:id', FuncionarioController.update)
router.delete('/funcionario/:id', FuncionarioController.delete)

router.post('/fornecedor/empresa', FornecedorEmpresaController.create)
router.get('/fornecedor/empresa/:id', FornecedorEmpresaController.index)

router.post('/pedido', PedidoController.create)
router.get('/pedido/:id', PedidoController.index)
router.delete('/pedido/:id', PedidoController.delete)

module.exports = router