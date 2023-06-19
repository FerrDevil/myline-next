import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: "smtp.beget.com.",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });