module.exports = (req) => {
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
    return{
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
    }
}