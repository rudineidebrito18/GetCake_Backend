const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const nomeFornecedor = req.body.nomeFornecedor.substring(0, 30)
        const nomeProduto = req.body.nomeProduto
        const cpfCnpj = req.body.cpfCnpj
        const codProdutoFornecedor = parseInt(req.body.codProdutoFornecedor)
        await execSqlQuery(`INSERT INTO FORNECEDOR(NM_FORNECEDOR, NM_PRODUTO, CPF_CNPJ, COD_PROD_FORN)
                            VALUES('${nomeFornecedor}', '${nomeProduto}', '${cpfCnpj}', ${codProdutoFornecedor})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM FORNECEDOR WHERE ID_FORNECEDOR=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const nomeFornecedor = req.body.nomeFornecedor.substring(0, 30)
        const nomeProduto = req.body.nomeProduto
        const cpfCnpj = req.body.cpfCnpj
        const codProdutoFornecedor = parseInt(req.body.codProdutoFornecedor)
        await execSqlQuery(`UPDATE FORNECEDOR SET NM_FORNECEDOR='${nomeFornecedor}', NM_PRODUTO='${nomeProduto}',
                            CPF_CNPJ='${cpfCnpj}', COD_PROD_FORN=${codProdutoFornecedor} WHERE ID_FORNECEDOR=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE FORNECEDOR WHERE ID_FORNECEDOR=${id}`, res)
    }
}