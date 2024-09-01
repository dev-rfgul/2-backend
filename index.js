require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! I am fahad')
});
app.get('/about', (req, res) => {
    res.send('Hello World! I am fahad currently on the about page')
});
app.get('/login', (req, res) => {
    res.send('Hello World! I am fahad currently on the login page')
})

app.get('/contact', (req, res) => {
    res.send("hello world i am on contact page")
})

app.get('/youtube',(req,res)=>{
    res.send("https://www.youtube.com/")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
})