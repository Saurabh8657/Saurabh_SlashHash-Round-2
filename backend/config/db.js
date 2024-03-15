const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root123',
    database: 'slashashRound2'
})
db.connect((err)=>{
    if(err) console.log(`error connecting ${err}`);
    else console.log(`Connected to DB`)
})

module.exports = {
    db,
}