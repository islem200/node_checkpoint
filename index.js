const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ajra.new.era@gmail.com',
    pass: 'cpfy fgrw ttbf jwpv',
  },
});

const mailOptions = {
  from: 'ajra.new.era@gmail.com',
  to: 'brikiislem64@gmail.com',
  subject: 'Test sending email',
  text: 'Hey there sister',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ', info.response);
  }
});
