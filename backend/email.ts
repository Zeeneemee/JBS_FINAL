import { OAuth2Client } from 'google-auth-library';
const nodemailer = require('nodemailer');
require('dotenv').config();


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


const Mailer = async (email:string, fullname:string, position:string, companyName:string, internship:boolean, entryLevel:boolean) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'kristapas.jobsecret@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      }
    });

    let subjectLine = 'Opportunity at ' + companyName;
    let emailBody = `Dear ${fullname},

We are pleased to inform you about a `;
    if (internship && !entryLevel) {
      emailBody += `potential internship opportunity`;
    } else if (!internship && entryLevel) {
      emailBody += `potential entry-level position`;
    } else {
      emailBody += `position`;
    }
    emailBody += ` Thank you for reaching out to us! We're excited to help you find your desired company, ${companyName} as ${position}.\nYour inquiry is in good hands, and we'll start the search right away.\n\nExpect an update from us soon with potential opportunities. If you have any preferences or specific companies in mind, feel free to let us know by replying to this email. Thanks again for choosing us. We look forward to supporting your career journey!

Best regards,
Kristapas Sukhanindr
Chief Technology Officer`;

    const mailOptions = {
      from:'kristapas.jobsecret@gmail.com',
      to: email,
      subject: subjectLine,
      text: emailBody
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent to :" + email + ": " + info.messageId);
  } catch(err) {
    console.log(err);
  }
}
// Mailer('taitonthor@gmail.com', 'Taiton', 'Software Engineer', 'Google', true, false);
export { Mailer };
