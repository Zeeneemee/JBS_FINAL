const nodemailer = require('nodemailer');
require('dotenv').config();

const Mailer = async (email:string, fullname:string, position:string, companyName:string, internship:boolean, entryLevel:boolean) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: 'kristapas.jobsecret@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
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
    emailBody += ` Thank you for reaching out to us! We're excited to help you find your desired company, ${companyName} as ${position}. Your inquiry is in good hands, and we'll start the search right away.

    Expect an update from us soon with potential opportunities. If you have any preferences or specific companies in mind, feel free to let us know by replying to this email.
    
    Thanks again for choosing us. We look forward to supporting your career journey!

Best regards,
Kristapas Sukhanindr
Cheif Technology Officer`;

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
export { Mailer };
