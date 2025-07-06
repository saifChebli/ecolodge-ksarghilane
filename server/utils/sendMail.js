import nodemailer from 'nodemailer';
const testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  },
});
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or use SMTP details if you're using another provider
//   auth: {
//     user: process.env.EMAIL_USER, // admin@gmail.com
//     pass: process.env.EMAIL_PASS, // app password or real pass (prefer .env)
//   },
// });


export const sendEmail = async ({ to, subject, html }) => {
  try {
   const info =  await transporter.sendMail({
      from: `"Ecolodge Reservations" <${testAccount.user}>`,
      to,
      subject,
      html,
    });
    console.log('✅ Email sent to', to);
    console.log('📬 Preview email at:', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    throw error;
  }
};
