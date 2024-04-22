/* eslint-disable prettier/prettier */
import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const { service, name, whatsapp, email, company } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: `${name} <${email}>`,
    to: "erciop@gmail.com",
    // to: "nataliacervenka@executa.co",
    subject: `Novo contato por formulário do site`,
    html: `<div><p>Nome: ${name}</p><p>WhatsApp: ${whatsapp}</p><p>E-mail: ${email}</p><p>Nome Empresa: ${company}</p><p>Serviço de interesse: ${service}</p></div>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
