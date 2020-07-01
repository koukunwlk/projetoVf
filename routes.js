const express = require('express')
const routes = express.Router()

routes.get('/',(req, res)=>{
   return res.redirect('/login')
})

routes.get('/login',(req, res)=>{
    return res.render('login')
})

module.exports = routes