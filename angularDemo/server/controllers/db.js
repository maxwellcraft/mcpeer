var DB,
    mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'peer'
})
module.exports = {
    pullContent: function(pullContentID, response) {

        connection.query("SELECT * FROM CONTENT WHERE pID=?",
            pullContentID, function (error, rows, fields) {
                if (error) {
                    console.log(error);
                }
                    response.writeHead(200, {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'text/plain'
                    });
                    response.write(JSON.stringify(rows));
                    response.end();
            });
    }
};