var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Poprost@22',
    database: 'dolphin'
})

conn.connect(err => {
    if (!err) {
        console.log(`Connected to Database...`);
    } else {
        console.log(`Error`);
    }
})

module.exports = conn;