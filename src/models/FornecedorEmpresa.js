module.exports = (req) => {
    const { produtoVendido } = req.body
    const { valorProduto } = req.body
    const idFornecedor = !req.body.idFornecedor ? null : req.body.idFornecedor
    const idEmpresa = !req.body.idEmpresa ? null : req.body.idEmpresa
    return {
        produtoVendido,
        valorProduto,
        idFornecedor,
        idEmpresa
    }
}