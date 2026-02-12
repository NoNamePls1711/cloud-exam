require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// logging middleware
app.use((req, res, next) => {
    const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`
    const logPath = path.join(__dirname, 'logs', 'access.log')
    fs.appendFileSync(logPath, log)
    next()
})

// demo endpoint
app.get('/api/demo', (req, res) => {
    res.json({
        message: "Hello from backend API",
        time: new Date()
    })
})

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: "Something went wrong!" })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
