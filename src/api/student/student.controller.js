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
                else if (rows[0] == null)
                    reject(err)
                else
                    resolve(rows[0])
            })
        })
    },
    updateReport: async ({ faceSuspicion, eyeSuspicion, tabSwitches, email, testId }) => {
        return new Promise((resolve, reject) => {
            connection.execute('UPDATE reports SET face_suspicion = ?, eye_suspicion = ?, tab_switches = ? WHERE student_email = ? AND test_id = ?', [faceSuspicion, eyeSuspicion, tabSwitches, email, testId], (err, result) => {
                if (err)
                reject(err)
            else
                resolve({ msg: "UPDATED" })
        })
    })
}
}