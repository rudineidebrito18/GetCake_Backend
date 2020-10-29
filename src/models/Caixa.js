module.exports = (req) => {
    const statusPagamento = req.body.statusPagamento.substring(0, 10)
    const formaPagamento = req.body.formaPagamento.substring(0, 10)
    const valorPagamento = parseFloat(req.body.valorPagamento)
    const idEmpresa = parseInt(req.body.idEmpresa)
    const idEstoque = !req.body.idEstoque ? null : parseInt(req.body.idEstoque)

    return {
        statusPagamento,
        formaPagamento,
        valorPagamento,
        idEmpresa,
        idEstoque
    }
}