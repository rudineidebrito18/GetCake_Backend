module.exports = (req) => {
    const cidade = !req.body.cidade ? null : req.body.cidade.substring(0, 25)
    const estado = !req.body.estado ? null : req.body.estado.substring(0, 2)
    const rua = !req.body.rua ? null : req.body.rua.substring(0, 25)
    const { quadra } = req.body
    const { lote } = req.body
    const { numero } = req.body
    const idFornecedor = !req.body.idFornecedor ? null : req.body.idFornecedor
    const idCliente = !req.body.idCliente ? null : req.body.idCliente
    const idEmpresa = !req.body.idEmpresa ? null : req.body.idEmpresa

    return {
        id, cidade, estado, rua, quadra, lote, numero, idFornecedor, idCliente, idEmpresa
    }
}