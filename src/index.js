const { response } = require('express')
const express = require('express')
const userRouter = require('./routers/user-router')
const taskRouter = require('./routers/task-router')
const databaseConnect = require('./db/mongoose.js')
const dotenv = require('dotenv')
require('./db/mongoose')

dotenv.config({ path: '.env' })

const port = process.env.PORT || 8000
const app = express()
databaseConnect(app)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//   console.log(token)
//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// myFunction()
