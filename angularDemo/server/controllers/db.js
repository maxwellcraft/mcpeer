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
    },
    pullSnapshot: function(pullSnapshotID, response) {

        connection.query("SELECT * FROM CONTENT WHERE pID=? ORDER BY pScore+nScore LIMIT 3",
            pullSnapshotID, function (error, rows, fields) {
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
    },
    smartSearch: function(requestMethod, response) {
        response.writeHead(200, {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'text/json'
                    });
        console.log('Inside search');
        var jsondata="";
        switch(requestMethod.params.method){
            case 'PERSON':

            case 'CONTENT':

            case 'COMMENT':
            default:
                console.log('Default hit');
                console.log(requestMethod.params);
                console.log(requestMethod.query);
                response.write('{"results":[');
                response.write('"USER":');

                connection.query("SELECT pID, first, last, pRating, nRating, datejoined FROM USER WHERE first LIKE ?;", '%'+requestMethod.query.first+'%', function (error, rows, fields)
                {
                if (error) {
                    console.log(error);
                }
                else{
                    jsondata+=JSON.stringify(rows);
                }
                // for (var i in rows){
        
                //     connection.query("SELECT * FROM CONTENT WHERE pID=? ORDER BY pScore+nScore;",
                //     (rows[i].pID), function (error, rows, fields) {
                //     if (error) {
                //         console.log(error);
                //     }
                //     console.log(rows);
                //     jsondata+=(JSON.stringify(rows));
                //     });              
                //     }//after here
                

                jsondata+=',"CONTENT":';
                if(requestMethod.query.hasOwnProperty('contentCategory')){
                    var sql = mysql.format("SELECT * FROM CONTENT WHERE (label LIKE ? AND category=?);",
                    ['%'+requestMethod.query.keyword+'%', requestMethod.query.contentCategory])
                    connection.query(sql, function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                    }
                    else{
                    console.log(rows);
                    jsondata+=(JSON.stringify(rows));
                    }
                    //messy, post execution
                    jsondata+=',"COMMENT":';
                    connection.query("SELECT * FROM COMMENT WHERE message LIKE ?",
                    '%'+requestMethod.query.keyword+'%', function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                    }
                    else{
                    console.log(rows);
                    jsondata+=(JSON.stringify(rows));
                    
                    }
                    response.write(jsondata);
                    response.write(']}');
                    response.end();
                    });//third q

                    });              
                }
                else{
                 connection.query("SELECT * FROM CONTENT WHERE label LIKE ?",
                    '%'+requestMethod.query.keyword+'%', function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                    }
                    else{
                    console.log(rows);
                    jsondata+=(JSON.stringify(rows));
                    }

                    jsondata+=',"COMMENT":';
                    connection.query("SELECT * FROM COMMENT WHERE message LIKE ?",
                    '%'+requestMethod.query.keyword+'%', function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                    }
                    else{
                    console.log(rows);
                    jsondata+=(JSON.stringify(rows));
                    
                    }
                    response.write(jsondata);
                    response.write(']}');
                    response.end();
                    });//third q
                    });//messy, post execution other branch
                }
                
                    //third query used to go here
                
                });//first query

        }
        // req.query.term
        

    }
};