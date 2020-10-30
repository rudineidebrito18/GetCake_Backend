const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const descricaoPedido = req.body.descricaoPedido.substring(0, 200)
        const { valorPedido } = req.body
        const { dataEntrega } = req.body
        const statusPedido = req.body.statusPedido.substring(0, 15)
        const { dataPedido } = req.body
        const modoRetiradaPedido = req.body.modoRetiradaPedido.substring(0, 10)
        const tipoPedido = req.body.tipoPedido.substring(0, 10)
        const { quantidadePedido } = req.body
        const tamanhoPedido = req.body.tamanhoPedido.substring(0, 1)
        const { idCliente } = req.body
        const { idCaixa } = req.body
        await execSqlQuery(`INSERT INTO PEDIDO(DESC_PEDIDO, VALOR_PEDIDO, DT_ENTREGA, STATUS_PEDIDO,
                            DT_PEDIDO, MODO_RETIRADA_PEDIDO, TIPO_PEDIDO, QTD_PEDIDO, TAMANHO_PEDIDO,
                            ID_CLIENTE, ID_CAIXA) VALUES('${descricaoPedido}', ${valorPedido}, ${dataEntrega},
                            '${statusPedido}', ${dataPedido}, '${modoRetiradaPedido}', '${tipoPedido}', ${quantidadePedido},
                            '${tamanhoPedido}', ${idCliente}, ${idCaixa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM PEDIDO WHERE ID_PEDIDO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE PEDIDO WHERE ID_PEDIDO=${id}`, res)
    }
}