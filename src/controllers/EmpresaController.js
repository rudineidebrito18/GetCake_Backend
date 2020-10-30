const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const nome = req.body.nome.substring(0, 30)
        const cpfCnpj = req.body.cpfCnpj.substring(0, 20)
        await execSqlQuery(`INSERT INTO EMPRESA(NM_EMPRESA, CPF_CNPJ) 
                            VALUES('${nome}','${cpfCnpj}')`, res)
    },
    index: async (req, res) => {
        const { cpfCnpj } = req.query
        await execSqlQuery(`SELECT * FROM EMPRESA WHERE NM_EMPRESA = '${cpfCnpj}'`, res)
    },
    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const nome = req.body.nome.substring(0, 30)
        const cpfCnpj = req.body.cpfCnpj.substring(0, 20)
        await execSqlQuery(`UPDATE EMPRESA SET NM_EMPRESA='${nome}',
                            CPF_CNPJ='${cpfCnpj}' WHERE ID_EMPRESA=${id}`, res)
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id)
        await execSqlQuery(`DELETE EMPRESA WHERE ID_EMPRESA='${id}'`, res)
    }
}