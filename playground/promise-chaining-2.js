require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

// Task.findByIdAndDelete('624c3547d10804622a60948a')
//   .then(result => {
//     console.log(result)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// Task.find({ completed: false })
//   .then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(e => {
//     console.log(e)
//   })

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id)
  const count = Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount('624c377d6cc23e3f45d68c12')
  .then(count => {
    console.log(count)
  })
  .catch(e => {
    console.log(e)
  })
