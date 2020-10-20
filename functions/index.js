const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = require("./credentials");

sgMail.setApiKey(SENDGRID_API_KEY);

admin.initializeApp();

exports.sendMail = functions.https.onRequest((req, res) => {
  const email = req.query.email;
  const name = req.query.name;
  const subject = req.query.subject;
  const body = req.query.body;
  const mailOptions = {
    from: "migueljimenezbenajes@gmail.com",
    to: "migueljimenezbenajes@gmail.com",
    subject: `Contact Portfolio - ${subject}`,
    text: `${email} - ${name}:\n\n ${body}`
  };

  console.log("mailOptions --> ", mailOptions);

  sgMail
    .send(mailOptions)
    .then(() => {
      console.log("Success ");
      return res.json({
        resp: "Email Sent"
      });
    })
    .catch(error => {
      console.log("error --> ", error);
      return res.json({ resp: `Error: ${error}` });
    });
});
