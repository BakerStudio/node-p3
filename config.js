'use strict'

module.exports = {
    name: 'interview-review',
    version: '0.1.2',
    port: process.env.PORT || 3000,
    db: {
        uri: 'mongodb://localhost:27017/interview',
    }
}
