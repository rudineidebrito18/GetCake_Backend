const execSQLQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const tipoTelefone = req.body.tipoTelefone.substring(0, 3)
        const telefone1 = req.body.telefone1
        const telefone2 = !req.body.telefone2 ? null : req.body.telefone2
        const telefone3 = !req.body.telefone3 ? null : req.body.telefone3
        const idFornecedor = !req.query.idFornecedor ? null : req.query.idFornecedor
        const idCliente = !req.query.idCliente ? null : req.query.idCliente
        const idEmpresa = !req.query.idEmpresa ? null : req.query.idEmpresa

        await execSQLQuery(`INSERT INTO TELEFONE(TIPO_TEL, NUM1, NUM2, NUM3, ID_TEL_FORNECEDOR,
                            ID_TEL_CLIENTE, ID_TEL_EMPRESA) VALUES('${tipoTelefone}', ${telefone1},
                            ${telefone2}, ${telefone3}, ${idFornecedor}, ${idCliente}, ${idEmpresa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params

        await execSQLQuery(`SELECT * FROM TELEFONE WHERE ID_TELEFONE=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const tipoTelefone = req.body.tipoTelefone.substring(0, 3)
        const telefone1 = req.body.telefone1
        const telefone2 = !req.body.telefone2 ? null : req.body.telefone2
        const telefone3 = !req.body.telefone3 ? null : req.body.telefone3
        const idFornecedor = !req.query.idFornecedor ? null : req.query.idFornecedor
        const idCliente = !req.query.idCliente ? null : req.query.idCliente
        const idEmpresa = !req.query.idEmpresa ? null : req.query.idEmpresa

        await execSQLQuery(`UPDATE TELEFONE SET TIPO_TEL='${tipoTelefone}', NUM1=${telefone1},
                            NUM2=${telefone2}, NUM3=${telefone3}, ID_TEL_FORNECEDOR=${idFornecedor},
                            ID_TEL_CLIENTE=${idCliente}, ID_TEL_EMPRESA=${idEmpresa}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSQLQuery(`DELETE TELEFONE WHERE ID_TELEFONE='${id}'`, res)
    }
}