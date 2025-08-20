import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-email-password",
  },
});

export const sendOtpEmail = async (
  email: string,
  otp: string,
  purpose: string
) => {
  const subject =
    purpose === "verify" ? "Email Verification OTP" : "Password Reset OTP";

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f9f9f9;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f9f9f9;padding:20px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color:#ffffff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);overflow:hidden;">
            <tr>
              <td style="background-color:#4f46e5;padding:20px;text-align:center;color:#ffffff;">
                <h1 style="margin:0;font-size:20px;">${subject}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;text-align:left;color:#333333;">
                <p style="font-size:16px;line-height:1.5;margin:0 0 15px;">
                  Hello,
                </p>
                <p style="font-size:16px;line-height:1.5;margin:0 0 15px;">
                  Your one-time password (OTP) for <strong>${purpose}</strong> is:
                </p>
                <p style="font-size:22px;font-weight:bold;color:#4f46e5;text-align:center;margin:25px 0;">
                  ${otp}
                </p>
                <p style="font-size:14px;line-height:1.5;color:#666;">
                   This code will expire in <strong>10 minutes</strong>.  
                  If you didn’t request this, you can safely ignore this email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f3f4f6;padding:15px;text-align:center;font-size:12px;color:#999999;">
                &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    html: htmlContent,
  });
};
