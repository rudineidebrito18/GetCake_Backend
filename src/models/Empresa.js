module.exports = (req) => {
    const nome = req.body.nome.substring(0, 30)
    const cpfCnpj = req.body.cpfCnpj

    return {
        nome, cpfCnpj
    }
}