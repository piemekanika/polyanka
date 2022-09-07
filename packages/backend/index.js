const express = require('express')
const app = express()
const port = 3000
const { faker } = require('@faker-js/faker')
const cors = require('cors')

faker.setLocale('ru')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

require('./endpoints/shop-list')(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
