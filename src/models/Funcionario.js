module.exports = (req) => {
    const nomeFuncionario = req.body.nomeFuncionario.substring(0, 50)
    const cargoFuncionario = req.body.cargoFuncionario.substring(0, 20)
    const { salarioFuncionario } = req.body
    const { dataAdmissao } = req.body
    const { dataDemissao } = req.body
    const statusFuncionario = req.body.statusFuncionario.substring(0, 1)
    const { idEstoque } = req.body

    return {
        nomeFuncionario,
        cargoFuncionario,
        salarioFuncionario,
        dataAdmissao,
        dataDemissao,
        statusFuncionario,
        idEstoque
    }
}