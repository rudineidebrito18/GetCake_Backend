const execSQLQuery = require("../utils/execSqlQuery")

class CaixaController {
    async create(req, res) {
        const statusPagamento = req.body.statusPagamento.substring(0, 10)
        const formaPagamento = req.body.formaPagamento.substring(0, 10)
        const valorPagamento = parseFloat(req.body.valorPagamento)
        const idEmpresa = parseInt(req.body.idEmpresa)
        const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)
        await execSQLQuery(`INSERT INTO CAIXA(STATUS_PGTO, FORMA_PAGTO, VALOR_PGTO, ID_EMPRESA, ID_ESTOQUE) 
                            VALUES('${statusPagamento}','${formaPagamento}', ${valorPagamento},
                            ${idEmpresa}, ${idEstoque})`, res)
    }
    async read(req, res) {
        const { id } = req.query
        await execSQLQuery(`SELECT * FROM CAIXA WHERE ID_CAIXA = ${id}`, res)
    }
}

module.exports = CaixaController