module.exports = (req) => {
    const nome = req.body.nome.substring(0, 60)
    const tipo = req.body.tipo.substring(0, 1)
    const cpfCnpj = req.body.cpfCnpj.substring(0, 20)

    return {
        nome,
        tipo,
        cpfCnpj
    }
}