'use strict';
const connection = require('../../config/db')

module.exports = {
    create: async ({ id, title, description, duration, start, end, date }) => {
        return new Promise((resolve, reject) => {
            connection.execute('INSERT INTO tests (id, title, description, duration, start, end, date) values(?,?,?,?,?,?,?)', [id, title, description, duration, start, end, date], (err, results) => {
                if (err)
                    reject(err)
                else
                    resolve("Inserted")
            })
        })
    },
    get: async ({ id }) => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM tests WHERE id = ?', [id], (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows[0])
            })
        })
    },
    getAll: async () => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM tests', (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            })
        })
    }
}