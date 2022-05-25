const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'marceloo.j99@gmail.com',
    subject: 'Welcome to the Task App!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'marceloo.j99@gmail.com',
    subject: "We're sorry you're leaving Task App",
    text: `Hi ${name}, we are really sorry to see you leaving Task App. Please let us know if there is anything we could have done better. Thanks a lot!`,
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}
