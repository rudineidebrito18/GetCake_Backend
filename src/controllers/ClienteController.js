const Cliente = require('../models/Cliente')
const execSqlQuery = require('../utils/execSqlQuery')

const ClienteController = {
    create: async (req, res) => {
        const { nome, tipo, cpfCnpj } = Cliente(req)
        await execSqlQuery(`INSERT INTO CLIENTE(NM_CLIENTE, TIPO_CLIENTE, CPF_CNPJ) 
                            VALUES('${nome}','${tipo}','${cpfCnpj}')`, res)
    },
    index: async (req, res) => {
        const { cpfCnpj } = req.query
        await execSqlQuery(`SELECT * FROM CLIENTE WHERE NM_CLIENTE = '${cpfCnpj}'`, res)
    },
    update: async (req, res) => {
        const { id } = req.params
        const { nome, tipo, cpfCnpj } = Cliente(req)
        await execSqlQuery(`UPDATE CLIENTE SET NM_CLIENTE='${nome}', TIPO_CLIENTE='${tipo}',
                            CPF_CNPJ='${cpfCnpj}' WHERE ID_CLIENTE=${id}`, res)
    }    
}


module.exports = ClienteController