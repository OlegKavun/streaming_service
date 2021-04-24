const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT ?? config.get('PORT')

app.use(express.json())

const start = async () => {
    try {
        await mongoose.connect(config.get('MongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })

        app.listen(PORT, () => {
            console.log(`Server run on ${PORT} port`)
        })
    } catch (e) {
        console.log(`Server Error`, e.message)
    }
}

start()