import credentials from "./credentials";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: credentials
});

exports.sendMail = functions.https.onRequest((request, responde) => {
  cors(req, res, () => {
    const email = req.query.email;
    const name = req.query.name;
    const subject = req.query.subject;
    const body = req.query.body;

    const mailOptions = {
      from: `${name} <${email}>`,
      to: "migueljimenezbenajes@gmail.com",
      subject: `Contact Portfolio - ${subject}`,
      html: body
    };

    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sended!");
    });
  });
});
