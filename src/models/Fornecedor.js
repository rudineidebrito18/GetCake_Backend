module.exports = (req) => {
    const nomeFornecedor = req.body.nomeFornecedor.substring(0, 30)
    const nomeProduto = req.body.nomeProduto
    const cpfCnpj = req.body.cpfCnpj
    const codProdutoFornecedor = parseInt(req.body.codProdutoFornecedor)

    return {
        nomeFornecedor,
        nomeProduto,
        cpfCnpj,
        codProdutoFornecedor
    }
}