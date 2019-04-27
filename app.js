const express = require('express')
const app = express()
const path = require('path')
const elokuvaHaku = require('./elokuvahaku2')


const publicPath = path.join(__dirname, './public')

app.use(express.static(publicPath))

app.get('/osoite',async(req, res)=>{
    const osoite = await elokuvaHaku()
    res.send(osoite)
})

app.listen(process.env.PORT,()=>{
    console.log('serveri ylhäällä')
})