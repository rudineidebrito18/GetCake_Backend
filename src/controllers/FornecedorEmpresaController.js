const FornecedorEmpresa = require("../models/FornecedorEmpresa")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { produtoVendido } = req.body
        const { valorProduto } = req.body
        const idFornecedor = !req.body.idFornecedor ? null : req.body.idFornecedor
        const idEmpresa = !req.body.idEmpresa ? null : req.body.idEmpresa
        await execSqlQuery(`INSERT INTO FON_EMP(PRODUTO_VENDIDO, VALOR_PRODUTO, ID_FORNECEDOR,
                            ID_EMPRESA) VALUES('${produtoVendido}', ${valorProduto}, ${idFornecedor},
                            ${idEmpresa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM FON_EMP WHERE ID_FORN_EMPR=${id}`, res)
    }
}