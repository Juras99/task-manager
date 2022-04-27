require('../src/db/mongoose')
const User = require('../src/models/user')

// 624c2e9fac43c0aeb919ee9d

// User.findByIdAndUpdate('624c2744ac43c0aeb919ee9b', {
//   age: 1,
// })
//   .then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(e => {
//     console.log(e)
//   })

const updateAgeAndCOunt = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = User.countDocuments({ age })
  return count
}

updateAgeAndCOunt('624c2744ac43c0aeb919ee9b', 3)
  .then(count => {
    console.log(count)
  })
  .catch(e => {
    console.log(e)
  })
