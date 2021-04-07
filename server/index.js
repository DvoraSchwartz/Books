const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const dbConnection = require('./DB')
const PORT = process.env.PORT;
const BookRouter = require('./routes/bookRouter');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

dbConnection.on('error', () => { console.log('dbConnection error') })
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Please send your request' })
})

app.listen(PORT, () => console.log(`Api is working on ${PORT}`))
app.use('/books', BookRouter)