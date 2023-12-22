const express = require('express')
const router = express.Router()

router.use((req,res,next)=>{
    console.log('Time: ', Date.now())
    next()
})

router.get('/:user/:age(\\d+)',(req,res)=>{
    const param = req.params
    const user = param.user
    const age = param.age
    res.send(`The user is ${user} and he/she is ${age} yo.`)

})

router.get('/about', (req, res) => {
    res.send('Explore about us')
  })

module.exports = router