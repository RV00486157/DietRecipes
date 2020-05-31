const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3030

const routes = require('./config/routes')
const db = require('./config/db')
db()

app.use(express.json())
app.use(cors())


app.use('/', routes)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})