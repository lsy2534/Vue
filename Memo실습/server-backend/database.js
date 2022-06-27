const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     database: 'devsoon',
     user:'root', 
     password: 'soon',
     connectionLimit: 5
});
module.exports = {
    run(qry, params) {
        return new Promise((resolve, reject) => {
            pool.getConnection()
            .then(conn => {
   
             conn.query(qry, params)
                .then((rows) => {
                    resolve(rows)
                    conn.end();
            })
            .catch(err => {
         //handle error
            console.log(err); 
            conn.end();
            })
            }).catch(err => {
                //not connected
            });
        })
    }
}
