module.exports = (req) => {
    const tipoTelefone = req.body.tipoTelefone.substring(0, 3)
    const telefone1 = req.body.telefone1
    const telefone2 = !req.body.telefone2 ? null : req.body.telefone2
    const telefone3 = !req.body.telefone3 ? null : req.body.telefone3
    const idFornecedor = !req.query.idFornecedor ? null : req.query.idFornecedor
    const idCliente = !req.query.idCliente ? null : req.query.idCliente
    const idEmpresa = !req.query.idEmpresa ? null : req.query.idEmpresa

    return {
        tipoTelefone,
        telefone1,
        telefone2,
        telefone3,
        idFornecedor,
        idCliente,
        idEmpresa
    }
}