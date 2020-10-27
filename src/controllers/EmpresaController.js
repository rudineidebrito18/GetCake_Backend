const execSQLQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const nome = req.body.nome.substring(0, 30)
        const cpfCnpj = req.body.cpfCnpj
        await execSQLQuery(`INSERT INTO EMPRESA(NM_EMPRESA, CPF_CNPJ) 
                            VALUES('${nome}','${cpfCnpj}')`, res)
    },
    index: async (req, res) => {
        const { nome } = req.query
        await execSQLQuery(`SELECT * FROM EMPRESA WHERE NM_EMPRESA = '${nome}'`, res)
    },
    update: async (req, res) => {
        const id = parseInt(req.params.id)
        const nome = req.body.nome.substring(0, 20)
        const cpfCnpj = req.body.cpfCnpj
        await execSQLQuery(`UPDATE EMPRESA SET NM_EMPRESA='${nome}',
                            CPF_CNPJ='${cpfCnpj}' WHERE ID_EMPRESA=${id}`, res)
    },
    delete: async(req, res) => {
        const id = parseInt(req.params.id)
        await execSQLQuery(`DELETE EMPRESA WHERE ID_EMPRESA='${id}'`, res)
    }
}