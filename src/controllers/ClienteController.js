const execSqlQuery = require('../utils/execSqlQuery')

const ClienteController = {
    create: async (req, res) => {
        const nome = req.body.nome.substring(0, 60)
        const tipo = req.body.tipo.substring(0, 1)
        const cpfCnpj = req.body.cpfCnpj.substring(0, 20)
        await execSqlQuery(`INSERT INTO CLIENTE(NM_CLIENTE, TIPO_CLIENTE, CPF_CNPJ) 
                            VALUES('${nome}','${tipo}','${cpfCnpj}')`, res)
    },
    index: async (req, res) => {
        const { cpfCnpj } = req.query
        await execSqlQuery(`SELECT * FROM CLIENTE WHERE CPF_CNPJ = '${cpfCnpj}'`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const nome = req.body.nome.substring(0, 60)
        const tipo = req.body.tipo.substring(0, 1)
        const cpfCnpj = req.body.cpfCnpj.substring(0, 20)
        await execSqlQuery(`UPDATE CLIENTE SET NM_CLIENTE='${nome}', TIPO_CLIENTE='${tipo}',
                            CPF_CNPJ='${cpfCnpj}' WHERE ID_CLIENTE=${id}`, res)
    },
    delete: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`DELETE CLIENTE WHERE ID_CLIENTE='${id}'`, res)
    }
}


module.exports = ClienteController