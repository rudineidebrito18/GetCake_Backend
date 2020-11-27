const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const nomeFuncionario = req.body.nomeFuncionario.substring(0, 50)
        const cargoFuncionario = req.body.cargoFuncionario.substring(0, 20)
        const { salarioFuncionario } = req.body
        const { dataAdmissao } = req.body
        const { dataDemissao } = req.body
        const statusFuncionario = req.body.statusFuncionario.substring(0, 1)
        await execSqlQuery(`INSERT INTO FUNCIONARIO(NM_FUNCIONARIO, CARGO_FUNCIONARIO, SAL_FUNCIONARIO,
                            DT_ADMISSAO, DT_DEMISSAO, STATUS_FUNCIONARIO) VALUES('${nomeFuncionario}',
                            '${cargoFuncionario}', ${salarioFuncionario}, ${dataAdmissao}, ${dataDemissao},
                            '${statusFuncionario}')`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM FUNCIONARIO WHERE ID_FUNCIONARIO=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const nomeFuncionario = req.body.nomeFuncionario.substring(0, 50)
        const cargoFuncionario = req.body.cargoFuncionario.substring(0, 20)
        const { salarioFuncionario } = req.body
        const { dataAdmissao } = req.body
        const { dataDemissao } = req.body
        const statusFuncionario = req.body.statusFuncionario.substring(0, 1)
        await execSqlQuery(`UPDATE FUNCIONARIO SET NM_FUNCIONARIO='${nomeFuncionario}', CARGO_FUNCIONARIO='${cargoFuncionario}',
                            SAL_FUNCIONARIO=${salarioFuncionario}, DT_ADMISSAO=${dataAdmissao}, DT_DEMISSAO=${dataDemissao},
                            STATUS_FUNCIONARIO='${statusFuncionario}' WHERE ID_FUNCIONARIO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE FUNCIONARIO WHERE ID_FUNCIONARIO=${id}`, res)
    }
}
