const Estoque = require("../models/Estoque")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const {
            nomeProduto,
            codProdutoEstoque,
            quantidadeMaxima,
            quantidadeMinima,
            quantidadeEstoque,
            dataEntrada,
            dataSaida,
            idEmpresa
        } = Estoque(req)
        await execSqlQuery(`INSERT INTO ESTOQUE(NM_PRODUTO, COD_PROD_ESTOQUE, QTD_MAX, QTD_MIN,
                            QTD_ESTOQUE, DT_ENTRADA, DT_SAIDA, ID_EMPRESA) VALUES
                            ('${nomeProduto}',${codProdutoEstoque}, ${quantidadeMaxima},
                            ${quantidadeMinima}, ${quantidadeEstoque}, ${dataEntrada},
                            ${dataSaida}, ${idEmpresa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM ESTOQUE WHERE ID_ESTOQUE = ${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE ESTOQUE WHERE ID_ESTOQUE = ${id}`, res)
    }
}