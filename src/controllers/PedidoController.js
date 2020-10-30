const Pedido = require("../models/Pedido")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { 
            descricaoPedido,
            valorPedido,
            dataEntrega,
            statusPedido,
            dataPedido,
            modoRetiradaPedido,
            tipoPedido,
            quantidadePedido,
            tamanhoPedido,
            idCliente,
            idCaixa
        } = Pedido(req)
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