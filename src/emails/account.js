const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeMail = (mail,name)=>{
    sgMail.send({
        to: mail,
        from : 'tahsib7@gmail.com',
        subject: 'Welcome',
        text: `Welcome to the app ${name}`
    })
}

const sendCancalationEmail = (mail,name)=>{
    sgMail.send({
        to: mail,
        from : 'tahsib7@gmail.com',
        subject: 'Good Bye!',
        text: `Good bye, ${name}`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancalationEmail
}