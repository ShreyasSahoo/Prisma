require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const express = require("express")
const app = express()
const prisma = new PrismaClient
app.use(express.json())
app.get('/', async (req, res) => {
    const userData = await prisma.user.findMany()
    res.json(userData)
})
app.post('/', async (req, res) => {
    const newUser = await prisma.user.create({ data: req.body })
    res.json(newUser)
})
app.put('/:id', async (req, res) => {
    const id = req.params.id
    const { age } = req.body
    const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: {
            age: age
        }
    })
    res.json(updatedUser)
})
app.delete('/:id', async (req, res) => {
    const id = req.params.id

    const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) },
    })
    res.json(deletedUser)
})
app.listen(3000, () => {
    console.log(process.env.DATABASE_URL)
    console.log('server running on port 3000')
})
