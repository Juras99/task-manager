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

const bcrypt = require('bcryptjs')

const myFunction = async () => {
  const password = 'Red12345!'
  const hashedPassword = await bcrypt.hash(password, 8)

  console.log(password)
  console.log(hashedPassword)

  const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
  console.log(isMatch)
}

myFunction()
