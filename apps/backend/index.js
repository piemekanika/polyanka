const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const { faker } = require('@faker-js/faker')
const cors = require('cors')

faker.setLocale('ru')

app.use(cors())

app.get('/', (req, res) => {
    res.send('The server is working.')
})

require('./endpoints/shops')(app)

app.listen(port, () => {
    console.log(`Polyanka backend is listening on port ${port}`)
})
