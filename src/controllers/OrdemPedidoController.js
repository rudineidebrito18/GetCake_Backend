const execSqlQuery = require("../utils/execSqlQuery")

module.exports = {
    create: async (req, res) => {
        const { 
            idCaixa,
            idFuncionario ,
            idPedido,
        }= req.body
        await execSqlQuery(`INSERT INTO ORDEM_PEDIDO(ID_CAIXA, ID_FUNCIONARIO, ID_PEDIDO)
                            VALUES(${idCaixa}, ${idFuncionario}, ${idPedido})`, res)
    },
    index: async (req, res) => {
        const { id } = req.params
        await execSqlQuery(`SELECT * FROM ORDEM_PEDIDO WHERE ID_ORDEM_PEDIDO=${id}`, res)
    }
}