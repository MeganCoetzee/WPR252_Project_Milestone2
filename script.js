require('dotenv').config()

const { application } = require('express');
let express = require('express')
let server = express();

server.set('view engine', 'ejs')

let host = process.env.HOST || 'localhost'
let port = process.env.PORT || '8087'

server.use(express.static("public"))
server.use(express.urlencoded())

server.get('/', (request, response) => {
    response.render('index.ejs')
})

server.listen(port, host, () => {
    console.log(`Server running on http://localhost:8084`)
})