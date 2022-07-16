const express = require('express')
const connection = require('./db_config')
const employees =  require('./router/employees')
const logger = require('morgan')
const cors = require('cors')
const app = express()

app.use(logger())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.use('/employees', employees)

const port = process.env.port || 3500

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



// lordkigen 