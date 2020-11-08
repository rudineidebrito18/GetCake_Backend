const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { 
            quantTotalPedido,
            dataPedido,
            dataEntregaPedido,
            quantPedidoCancelado,
            idPedido,
            quantCadastroNovo,
            quantCadastroAlterado,
            quantCadastroExcluido,
            idCliente,
            idFornecedor,
            idFuncionario,
            dataEntradaEstoque,
            codigoProduto,
            dataSaidaProduto,
            idEstoque,
        } = req.body

        await execSqlQuery(`INSERT INTO HISTORICO(QTD_TOTAL_PEDIDO, DT_PEDIDO, DT_ENTREGA_PEDIDO, QTD_PEDIDO_CANCELAMENTO,
                    ID_PEDIDO, QTD_CADASTRO_NOVO, QTD_CADASTRO_ALTERADO, QTD_CADASTRO_EXCLUIDO, ID_CLIENTE, ID_FORNECEDOR,
                    ID_FUNCIONARIO, DT_ENTRADA_ESTOQUE, COD_PRODUTO, DT_SAIDA_ESTOQUE, ID_ESTOQUE) 
                    VALUES(${quantTotalPedido}, ${dataPedido}, ${dataEntregaPedido}, ${quantPedidoCancelado}, 
                    ${idPedido}, ${quantCadastroNovo}, ${quantCadastroAlterado}, ${quantCadastroExcluido}, 
                    ${idCliente}, ${idFornecedor}, ${idFuncionario}, ${dataEntradaEstoque}, ${codigoProduto}, 
                    ${dataSaidaProduto}, ${idEstoque})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM HISTORICO WHERE ID_HIST=${id}`, res)
    }
}