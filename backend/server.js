const express = require('express')
const students = require('./router')
const app = express()
const port = 4000

app.use('/submit',students)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})