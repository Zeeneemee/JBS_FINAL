const express = require('express')
const app = express()
const port = 4000

app.all('/secret',(req,res,next)=>{
    console.log("Accessimg Secret Section")
    next()
})


// Reg expression
app.get('/ab?cd',(req,res)=>{
    console.log("route to abcd or acd")
})

app.get('ab+cd',(req,res)=>{
    console.log('route to abbbcd or abcd or abbcd')
})

app.get('ab*cd',(req,res)=>{
    console.log('route to abihdiaicd or abehfhcd')
})

app.get(/a/, (req, res) => {
    res.send('route to anything with a in it')
})

app.get(/fly/,(req,res)=>{
    console.log('route to any route with fly eg. dragonfly')
})

// basic routing


app.get('/submit',(req,res) => {
    res.send('Hello World')
})

app.post('/submit',(req,res)=>{
    res.send("Got a POST request")
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
  })

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
