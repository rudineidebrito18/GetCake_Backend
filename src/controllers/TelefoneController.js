const Telefone = require("../models/Telefone")
const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { tipoTelefone, telefone1, telefone2, telefone3, idFornecedor, idCliente, idEmpresa} = Telefone(req)
        await execSqlQuery(`INSERT INTO TELEFONE(TIPO_TEL, NUM1, NUM2, NUM3, ID_TEL_FORNECEDOR,
                            ID_TEL_CLIENTE, ID_TEL_EMPRESA) VALUES('${tipoTelefone}', ${telefone1},
                            ${telefone2}, ${telefone3}, ${idFornecedor}, ${idCliente}, ${idEmpresa})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM TELEFONE WHERE ID_TELEFONE=${id}`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { tipoTelefone, telefone1, telefone2, telefone3, idFornecedor, idCliente, idEmpresa} = Telefone(req)
        await execSqlQuery(`UPDATE TELEFONE SET TIPO_TEL='${tipoTelefone}', NUM1=${telefone1},
                            NUM2=${telefone2}, NUM3=${telefone3}, ID_TEL_FORNECEDOR=${idFornecedor},
                            ID_TEL_CLIENTE=${idCliente}, ID_TEL_EMPRESA=${idEmpresa}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE TELEFONE WHERE ID_TELEFONE='${id}'`, res)
    }
}