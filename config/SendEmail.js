// using Twilio SendGrid's v3 Node.js Library'
// https://github.com/sendgrid/sendgrid-nodejs
//javascript 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
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//Sg. HoCbMeqBRF2D_irbH40ySQ.7jnVx9bkjspq1v0Jnvn1Idgg8YVa5z052HjvnGrC0A
require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendEmail = (receiver, source, subject,content)=>{
try{

  const data = {
    to: receiver, // Change to your recipient
    from: source, //  'filomenadeveloper@gmail.com'
    subject,
    html: content,
  }
  return sgMail.send(data)
}catch(e){
  return new error(e)
}
}

module.exports= sendEmail


/*sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })*/