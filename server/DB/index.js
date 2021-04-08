const mongoose = require('mongoose')
const dbConnection = process.env.DB
mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected..'))
    .catch(error => {
        console.error('Connection error', error.message)
    })

const db = mongoose.connection

module.exports = db