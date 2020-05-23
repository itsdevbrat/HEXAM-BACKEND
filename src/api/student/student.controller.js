'use strict';
const connection = require('../../config/db')

module.exports = {
    getAll: async () => {
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM students', (err, rows, fields) => {
                if (err)
                    reject(err)
                else
                    resolve(rows)
            })
        })
    },
    getReport: async ({ email }) => { 
        return new Promise((resolve, reject) => {
            connection.execute('SELECT * FROM reports WHERE student_email = ?', [email], (err, rows, fields) => {
                console.log(rows[0])
                if (err)
                    reject(err)
                else if(rows[0] == null)
                    reject(err)
                else
                    resolve(rows[0])
            })
        })
    }
}