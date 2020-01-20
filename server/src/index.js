const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cropRouter = require('./routers/crop')
const cartRouter = require('./routers/cart')
const app = express()
const port = process.env.PORT

// app.use((req, res, next) =>{
//         res.send('Site Under maintainence try again soon.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(cropRouter)
app.use(cartRouter)


app.listen(port , ()=>{
    console.log('Server is up on port ' + port)
})