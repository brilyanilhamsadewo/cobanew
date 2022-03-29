const mysql = require('mysql2/promise');
// const { readSession } = require('./session');

// const createConnection = async () => {
//     return await mysql.createConnection({
//         host:'remotemysql.com',
//         user: 's4uZtE1YET',
//         password: 'y1KjJ02SdI',
//         database: 's4uZtE1YET'
//     });
// }

// aws reblood rds
const createConnection = async () => {
    return await mysql.createConnection({
        host:'database4545mysql.cepilawr0dy9.ap-southeast-1.rds.amazonaws.com',
        user: 'admin4545',
        password: 'admin4545',
        database: 'database4545'
    });
}

const getReply = async(keyword) => {
    const connection = await createConnection();
    const [rows] = await connection.execute('SELECT message FROM wa_replies_3 WHERE keyword=? ',[keyword]);
    if(rows.length > 0) return rows[0].message;
    return false;
}

module.exports ={
    createConnection,
    getReply
}
