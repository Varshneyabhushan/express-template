require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()
const public = path.join(__dirname,'/public')

app.use(express.static(public))
app.use(express.json())

const listener = app.listen(process.env.PORT , function(){
    let {family , address , port } = listener.address()
    console.log(`app is listening on: ${family}:${address}:${port}`);
})

app.get('',(req,res)=> res.sendFile(`public.html` , { root : public }))