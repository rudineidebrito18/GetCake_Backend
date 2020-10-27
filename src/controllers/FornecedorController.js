const execSQLQuery = require("../utils/execSqlQuery")

class FornecedorController {
    async create(req, res) {
        const nomeFornecedor = req.body.nomeFornecedor.substring(0, 30)
        const nomeProduto = req.body.nomeProduto
        const cpfCnpj = req.body.cpfCnpj
        const codProdutoFornecedor = parseInt(req.body.codProdutoFornecedor)

        await execSQLQuery(`INSERT INTO FORNECEDOR(NM_FORNECEDOR, NM_PRODUTO, CPF_CNPJ, COD_PROD_FORN)
                            VALUES('${nomeFornecedor}', '${nomeProduto}', '${cpfCnpj}', ${codProdutoFornecedor})`, res)
    }
    async read(req, res) {
        const { id } = req.query

        await execSQLQuery(`SELECT * FROM FORNECEDOR WHERE ID_FORNECEDOR=${id}`, res)
    }
}

module.exports = FornecedorController