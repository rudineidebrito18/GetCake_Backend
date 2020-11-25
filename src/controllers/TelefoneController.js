const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const tipoTelefone = req.body.tipoTelefone.substring(0, 3)
        const telefone1 = req.body.telefone1
        const telefone2 = !req.body.telefone2 ? null : req.body.telefone2
        const telefone3 = !req.body.telefone3 ? null : req.body.telefone3
        const idCliente = req.body.idCliente
        await execSqlQuery(`INSERT INTO TELEFONE(TIPO_TEL, NUM1, NUM2, NUM3, ID_TEL_CLIENTE) 
                            VALUES('${tipoTelefone}', '${telefone1}',
                            '${telefone2}', '${telefone3}', ${idCliente})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM TELEFONE WHERE ID_TELEFONE=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const tipoTelefone = req.body.tipoTelefone.substring(0, 3)
        const telefone1 = req.body.telefone1
        const telefone2 = !req.body.telefone2 ? null : req.body.telefone2
        const telefone3 = !req.body.telefone3 ? null : req.body.telefone3
        const idCliente = !req.query.idCliente ? null : req.query.idCliente
        await execSqlQuery(`UPDATE TELEFONE SET TIPO_TEL='${tipoTelefone}', NUM1='${telefone1}',
                            NUM2='${telefone2}', NUM3='${telefone3}', ID_TEL_CLIENTE=${idCliente}
                            WHERE ID_TELEFONE=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE TELEFONE WHERE ID_TELEFONE='${id}'`, res)
    }
}
