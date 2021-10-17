//pulls any article with the word 'climate' in the title or in the url from the guardian website and
// lists them in array format on our /news page 
const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

const articles = []

app.get('/', function (req ,res ) {
    res.json('Welcome to my Climate Change News API')
})

app.get('/news', (req ,res ) => {
    
    axios.get('https://www.theguardian.com/environment/climate-crisis')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("climate")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title,
                    url
                })

            })
            res.json(articles)
        }).catch((err) => console.log(err))
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))