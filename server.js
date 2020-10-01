const { static } = require('express')
const express = require('express')
const port = 3000
const server = express()

server.use(express.static('public'))

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html')
})

server.get('/sobre', (req, res) => {
  res.sendFile(__dirname + '/public/sobre.html')
})

server.get('/produtos', (req, res) => {
  res.sendFile(__dirname + '/public/produtos.html')
})

server.get('/conta', (req, res) => {
  res.sendFile(__dirname + '/public/conta.html')
})

server.get('/carrinho', (req, res) => {
  res.sendFile(__dirname + '/public/carrinho.html')
})

server.get('/avalie', (req, res) => {
  res.sendFile(__dirname + '/public/avalie.html')
})
server.listen(port)