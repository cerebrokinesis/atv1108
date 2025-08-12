const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Seja bem-vindo! Cadastre-se!')
})

app.get('/Julia', (req, res) => {
    res.send('Seja bem-vinda Julia!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
