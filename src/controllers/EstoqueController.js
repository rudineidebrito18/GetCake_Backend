const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const nomeProduto = req.body.nomeProduto
        const codProdutoEstoque = parseInt(req.body.codProdutoEstoque)
        const quantidadeMaxima = parseInt(req.body.quantidadeMaxima)
        const quantidadeMinima = parseInt(req.body.quantidadeMinima)
        const quantidadeEstoque = parseInt(req.body.quantidadeEstoque)
        const dataEntrada = req.body.dataEntrada
        const dataSaida = req.body.dataSaida
        const idEmpresa = !req.body.idEmpresa ? null : parseInt(req.body.idEmpresa)
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
    update: async (req, res) => {
        const { id } = req.params
        const nomeProduto = req.body.nomeProduto
        const codProdutoEstoque = parseInt(req.body.codProdutoEstoque)
        const quantidadeMaxima = parseInt(req.body.quantidadeMaxima)
        const quantidadeMinima = parseInt(req.body.quantidadeMinima)
        const quantidadeEstoque = parseInt(req.body.quantidadeEstoque)
        const dataEntrada = req.body.dataEntrada
        const dataSaida = req.body.dataSaida
        const idEmpresa = !req.body.idEmpresa ? null : parseInt(req.body.idEmpresa)
        await execSqlQuery(`UPDATE ESTOQUE SET NM_PRODUTO='${nomeProduto}', COD_PROD_ESTOQUE=${codProdutoEstoque},
                            QTD_MAX=${quantidadeMaxima}, QTD_MIN=${quantidadeMinima}, QTD_ESTOQUE=${quantidadeEstoque},
                            DT_ENTRADA=${dataEntrada}, DT_SAIDA=${dataSaida}, ID_EMPRESA=${idEmpresa} 
                            WHERE ID_ESTOQUE=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE ESTOQUE WHERE ID_ESTOQUE = ${id}`, res)
    }
}