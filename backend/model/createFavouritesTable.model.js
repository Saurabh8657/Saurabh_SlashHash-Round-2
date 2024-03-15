const mysql = require('mysql');
const { db } = require('../config/db');

const createFavouritesTable = (req, res, next) => {
    try {
        const createTableQuery = 
        `CREATE TABLE IF NOT EXISTS favourites (
            id VARCHAR(255) PRIMARY KEY,
            content TEXT NOT NULL,
            author VARCHAR(255) NOT NULL
        )`
        db.query(createTableQuery, (err, result) => {
            if(err) res.status(200).json({"Error creating table": err})
            else next();
        })
    } catch (error) {
        res.json(error);
    }
}

module.exports = {
    createFavouritesTable,
}