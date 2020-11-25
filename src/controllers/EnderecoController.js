const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const cidade = req.body.cidade.substring(0, 25)
        const estado = req.body.estado.substring(0, 2)
        const rua = !req.body.rua ? null : req.body.rua.substring(0, 25)
        const { quadra } = req.body
        const { lote } = req.body
        const { numero } = req.body
        const idCliente = req.body.idCliente
        await execSqlQuery(`INSERT INTO ENDERECO(CIDADE, ESTADO, RUA, QUADRA, LOTE, NUMERO,
                            ID_END_CLIENTE) VALUES('${cidade}', '${estado}', '${rua}', ${quadra},
                            ${lote}, ${numero}, ${idCliente})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM ENDERECO WHERE ID_ENDERECO=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const cidade = req.body.cidade.substring(0, 25)
        const estado = req.body.estado.substring(0, 2)
        const rua = !req.body.rua ? null : req.body.rua.substring(0, 25)
        const { quadra } = req.body
        const { lote } = req.body
        const { numero } = req.body
        const idCliente = req.body.idCliente
        await execSqlQuery(`UPDATE ENDERECO SET CIDADE='${cidade}', ESTADO='${estado}', RUA='${rua}',
                            QUADRA=${quadra}, LOTE=${lote}, NUMERO=${numero},
                            ID_END_CLIENTE=${idCliente} WHERE ID_ENDERECO=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE ENDERECO WHERE ID_ENDERECO=${id}`, res)
    }
}