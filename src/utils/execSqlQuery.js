module.exports = (sqlQry, res) => {
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.status(400).json(err));
}