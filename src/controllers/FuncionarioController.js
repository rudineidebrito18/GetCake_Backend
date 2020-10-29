const Funcionario = require("../models/Funcionario")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const {
            nomeFuncionario,
            cargoFuncionario,
            salarioFuncionario,
            dataAdmissao,
            dataDemissao,
            statusFuncionario,
            idEstoque
        } = Funcionario(req)
        await execSqlQuery(`INSERT INTO FUNCIONARIO(NM_FUNCIONARIO, CARGO_FUNCIONARIO, SAL_FUNCIONARIO,
                            DT_ADMISSAO, DT_DEMISSAO, STATUS_FUNCIONARIO, ID_ESTOQUE) VALUES('${nomeFuncionario}',
                            '${cargoFuncionario}', ${salarioFuncionario}, ${dataAdmissao}, ${dataDemissao},
                            '${statusFuncionario}', ${idEstoque})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM FUNCIONARIO WHERE ID_FUNCIONARIO=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const {
            nomeFuncionario,
            cargoFuncionario,
            salarioFuncionario,
            dataAdmissao,
            dataDemissao,
            statusFuncionario,
            idEstoque
        } = Funcionario(req)
        await execSqlQuery(`UPDATE FUNCIONARIO SET NM_FUNCIONARIO='${nomeFuncionario}', CARGO_FUNCIONARIO='${cargoFuncionario}',
                            SAL_FUNCIONARIO=${salarioFuncionario}, DT_ADMISSAO=${dataAdmissao}, DT_DEMISSAO=${dataDemissao},
                            STATUS_FUNCIONARIO='${statusFuncionario}', ID_ESTOQUE=${idEstoque} WHERE ID_FUNCIONARIO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE FUNCIONARIO WHERE ID_FUNCIONARIO=${id}`, res)
    }
}