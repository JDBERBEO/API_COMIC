require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')


const port = process.env.PORT || 8000
const app = express()


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.get('/', async (req, res) =>{
  try {
    const randomComic = Math.floor(Math.random() * (1 - 2500)) + 2500
    console.log(randomComic)
    const response= await axios.get(`https://xkcd.com/${randomComic}/info.0.json`)
    res.json(response.data)
    console.log('response: ', response.data)
  } catch (error) {
    console.error(error)
  }
})


app.listen(8000, () => {
    console.log(`app running at http://localhost:${port}`)
})