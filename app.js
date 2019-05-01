const express = require('express')
const app = express()
const path = require('path')
const movieSearch = require('./movieSearch')


const publicPath = path.join(__dirname, './public')

app.use(express.static(publicPath))

app.get('/movie',async(req, res)=>{
    const address = await movieSearch()
    res.send(address)
})

app.listen(process.env.PORT,()=>{
    console.log('server up')
})