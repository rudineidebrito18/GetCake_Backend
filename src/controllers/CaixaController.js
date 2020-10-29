const execSqlQuery = require("../utils/execSqlQuery")
const execSQLQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const statusPagamento = req.body.statusPagamento.substring(0, 10)
        const formaPagamento = req.body.formaPagamento.substring(0, 10)
        const valorPagamento = parseFloat(req.body.valorPagamento)
        const idEmpresa = parseInt(req.body.idEmpresa)
        const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)
        await execSQLQuery(`INSERT INTO CAIXA(STATUS_PGTO, FORMA_PAGTO, VALOR_PGTO, ID_EMPRESA, ID_ESTOQUE) 
                            VALUES('${statusPagamento}','${formaPagamento}', ${valorPagamento},
                            ${idEmpresa}, ${idEstoque})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSQLQuery(`SELECT * FROM CAIXA WHERE ID_CAIXA = ${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const statusPagamento = req.body.statusPagamento.substring(0, 10)
        const formaPagamento = req.body.formaPagamento.substring(0, 10)
        const valorPagamento = parseFloat(req.body.valorPagamento)
        const idEmpresa = parseInt(req.body.idEmpresa)
        const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)

        await execSQLQuery(`UPDATE CAIXA SET STATUS_PGTO='${statusPagamento}', FORMA_PAGTO='${formaPagamento}',
                            VALOR_PGTO=${valorPagamento}, ID_EMPRESA=${idEmpresa}, ID_ESTOQUE=${idEstoque}
                            WHERE ID_CAIXA=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSQLQuery(`DELETE CAIXA WHERE ID_CAIXA=${id}`, res)
    }
}