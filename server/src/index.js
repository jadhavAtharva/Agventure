const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/fertilizer')
const cropRouter = require('./routers/market')
const seedRouter = require('./routers/seeds')
const app = express()
const port = process.env.PORT

// app.use((req, res, next) =>{
//         res.send('Site Under maintainence try again soon.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(cropRouter)
app.use(seedRouter)


app.listen(port , ()=>{
    console.log('Server is up on port ' + port)
})