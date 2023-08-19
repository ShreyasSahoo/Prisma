require("dotenv").config();
const express = require("express")
const app = express()
app.use(express.json())
app.listen(3000, () => {
    console.log(process.env.DATABASE_URL)
    console.log('server running on port 3000')
})
