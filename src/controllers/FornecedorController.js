const Fornecedor = require("../models/Fornecedor")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { nomeFornecedor, nomeProduto, cpfCnpj, codProdutoFornecedor } = Fornecedor(req)
        await execSqlQuery(`INSERT INTO FORNECEDOR(NM_FORNECEDOR, NM_PRODUTO, CPF_CNPJ, COD_PROD_FORN)
                            VALUES('${nomeFornecedor}', '${nomeProduto}', '${cpfCnpj}', ${codProdutoFornecedor})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM FORNECEDOR WHERE ID_FORNECEDOR=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE FORNECEDOR WHERE ID_FORNECEDOR=${id}`, res)
    }
}