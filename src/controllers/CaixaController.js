const Caixa = require("../models/Caixa")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const statusPagamento = req.body.statusPagamento.substring(0, 10)
        const formaPagamento = req.body.formaPagamento.substring(0, 10)
        const valorPagamento = parseFloat(req.body.valorPagamento)
        const idEmpresa = parseInt(req.body.idEmpresa)
        const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)
        await execSqlQuery(`INSERT INTO CAIXA(STATUS_PGTO, FORMA_PAGTO, VALOR_PGTO, ID_EMPRESA, ID_ESTOQUE) 
                            VALUES('${statusPagamento}','${formaPagamento}', ${valorPagamento},
                            ${idEmpresa}, ${idEstoque})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM CAIXA WHERE ID_CAIXA = ${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const statusPagamento = req.body.statusPagamento.substring(0, 10)
        const formaPagamento = req.body.formaPagamento.substring(0, 10)
        const valorPagamento = parseFloat(req.body.valorPagamento)
        const idEmpresa = parseInt(req.body.idEmpresa)
        const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)
        await execSqlQuery(`UPDATE CAIXA SET STATUS_PGTO='${statusPagamento}', FORMA_PAGTO='${formaPagamento}',
                            VALOR_PGTO=${valorPagamento}, ID_EMPRESA=${idEmpresa}, ID_ESTOQUE=${idEstoque}
                            WHERE ID_CAIXA=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE CAIXA WHERE ID_CAIXA=${id}`, res)
    }
}