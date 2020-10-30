const Caixa = require("../models/Caixa")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { statusPagamento, formaPagamento, valorPagamento, idEmpresa, idEstoque} = Caixa(req)
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
        const { statusPagamento, formaPagamento, valorPagamento, idEmpresa, idEstoque} = Caixa(req)
        await execSqlQuery(`UPDATE CAIXA SET STATUS_PGTO='${statusPagamento}', FORMA_PAGTO='${formaPagamento}',
                            VALOR_PGTO=${valorPagamento}, ID_EMPRESA=${idEmpresa}, ID_ESTOQUE=${idEstoque}
                            WHERE ID_CAIXA=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE CAIXA WHERE ID_CAIXA=${id}`, res)
    }
}