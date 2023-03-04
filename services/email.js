const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

exports.sendEmail = (email, message, subject) => {
  const emailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: subject,
    html: `<h4>${email} vous a envoyé un message via le formulaire de contact :</h4><br/> ${message}`,
  };

  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message envoyé: ${info.response}`);
      console.log(emailData);
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};

exports.sendAppliance = (email, message, subject, attachment) => {
  const emailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: subject,
    html: `<h4>${email} vous a envoyé une candidature :</h4><br/> ${message}`,
    attachments: {
      path: path.relative(process.cwd(), `uploads/${attachment}`),
      filename: attachment,
    },
  };

  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message envoyé: ${info.response}`);
      console.log(emailData);
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};

exports.sendShortlist = (email, message) => {
  const emailData = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: 'Nouvelle demande de shortlist !',
    html: `<h4>${email} vous a envoyé une demande de shortlist :</h4><br/> ${message}`,
  };

  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message envoyé: ${info.response}`);
      console.log(emailData);
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};
