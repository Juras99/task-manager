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

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//   // const task = await Task.findById('627b0f57f6c734362374286e')
//   // await task.populate(['owner'])
//   // console.log(task.owner)

//   const user = await User.findById('627b0ecb725cc17a2533763c')
//   await user.populate(['tasks'])
//   console.log(user.tasks)
// }

// main()
