const express=require('express')
const app=express()
const {join}=require('path')


app.use(express.static(join(__dirname,'./app/public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const routes=require('./app/routing/index.js')
routes(app)
app.listen(3000)