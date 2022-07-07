const mysql = require ("mysql");
//import { ResultSetHeaderPacket } from "./node_modules/mysql/lib/protocol/packets/ResultSetHeaderPacket";


const db = mysql.createConnection({
    host: "127.0.0.1",
    database: "name_bfm",
    user: "root",
    password: "NEWPASS",
    port: "3306"
});


db.connect((err)=>{
    if (err) {
        console.log(`error connecting: ${err.stack}`);
    } else {
        console.log("connecté à la base de donnée - name_bfm");
        console.log(`connected as id ${db.threadId}`);

    }
});

module.exports = {db};