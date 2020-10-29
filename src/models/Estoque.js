module.exports = (req) => {
    const nomeProduto = req.body.nomeProduto
    const codProdutoEstoque = parseInt(req.body.codProdutoEstoque)
    const quantidadeMaxima = parseInt(req.body.quantidadeMaxima)
    const quantidadeMinima = parseInt(req.body.quantidadeMinima)
    const quantidadeEstoque = parseInt(req.body.quantidadeEstoque)
    const dataEntrada = req.body.dataEntrada
    const dataSaida = req.body.dataSaida
    const idEmpresa = !req.body.idEmpresa ? null : parseInt(req.body.idEmpresa)

    return {
        nomeProduto,
        codProdutoEstoque,
        quantidadeMaxima,
        quantidadeMinima,
        quantidadeEstoque,
        dataEntrada,
        dataSaida,
        idEmpresa
    }
}