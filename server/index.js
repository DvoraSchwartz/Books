const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const dbConnection = require('./DB')

const BookRouter = require('./routes/bookRouter');

const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
const path = require('path');

dbConnection.on('error', () => { console.log('dbConnection error') })

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}
app.listen(PORT, () => console.log(`Api is working on ${PORT}`))
app.use('/books', BookRouter)