const execSQLQuery = require("../utils/execSqlQuery")

class EstoqueController {
    async create(req, res) {
        const nomeProduto = req.body.nomeProduto
        const codProdutoEstoque = parseInt(req.body.codProdutoEstoque)
        const quantidadeMaxima = parseInt(req.body.quantidadeMaxima)
        const quantidadeMinima = parseInt(req.body.quantidadeMinima)
        const quantidadeEstoque = parseInt(req.body.quantidadeEstoque)
        const dataEntrada = req.body.dataEntrada
        const dataSaida = req.body.dataSaida
        const idEmpresa = !req.body.idEmpresa ? null : parseInt(req.body.idEmpresa)

        await execSQLQuery(`INSERT INTO ESTOQUE(NM_PRODUTO, COD_PROD_ESTOQUE, QTD_MAX, QTD_MIN,
                            QTD_ESTOQUE, DT_ENTRADA, DT_SAIDA, ID_EMPRESA) VALUES
                            ('${nomeProduto}',${codProdutoEstoque}, ${quantidadeMaxima},
                            ${quantidadeMinima}, ${quantidadeEstoque}, ${dataEntrada},
                            ${dataSaida}, ${idEmpresa})`, res)
    }
    async read(req, res) {
        const { id } = req.query
        await execSQLQuery(`SELECT * FROM ESTOQUE WHERE ID_ESTOQUE = ${id}`, res)
    }
}

module.exports = EstoqueController