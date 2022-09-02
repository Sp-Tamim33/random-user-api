const express = require('express')
const app = express();
const userRouter = require('./routes/user.route')
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Random User API')
})

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Random User API Running ON Port: ${port}`)
})