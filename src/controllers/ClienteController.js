const execSQLQuery = require('../utils/execSqlQuery')

class ClienteController {
    async index(req, res) {
        const {nome} = req.query
        await execSQLQuery(`SELECT * FROM CLIENTE WHERE NM_CLIENTE = '${nome}'`, res)
    }
    async create(req, res) {
        const nome = req.body.nome.substring(0, 20)
        const tipo = req.body.tipo.substring(0, 1)
        const cpfCnpj = req.body.cpfCnpj
        await execSQLQuery(`INSERT INTO CLIENTE(NM_CLIENTE, TIPO_CLIENTE, CPF_CNPJ) 
                            VALUES('${nome}','${tipo}','${cpfCnpj}')`, res)
    }
}

module.exports = ClienteController