const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { nome} = req.body
        const { valor } = req.body
        const { descricao } = req.body
        await execSqlQuery(`INSERT INTO PRODUTO(NOME, VALOR, DESCRICAO) VALUES
                            ('${nome}',${valor}, '${descricao}')`, res)
    },
    index: async (req, res) => {
        const { nome } = req.query
        await execSqlQuery(`SELECT * FROM PRODUTO WHERE ID_PRODUTO LIKE '%${nome}%'`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { nome} = req.body
        const { valor } = req.body
        const { descricao } = req.body
        await execSqlQuery(`UPDATE PRODUTO SET NM_PRODUTO='${nome}, VALOR='${valor},
                            DESCRICAO='${descricao} WHERE ID_PRODUTO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE PRODUTO WHERE ID_PRODUTO = ${id}`, res)
    }
}