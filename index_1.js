// this version returns the html code theguardian link below via azios.get() when you land on the localhost:8000/nes and displays in the the terminal

const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

app.get('/', function (req ,res ) {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news', (req ,res ) => {
    
    axios.get('https://www.theguardian.com/environment/climate-crisis')
        .then((response) => {
            const html = response.data
            console.log(html)
        })
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))