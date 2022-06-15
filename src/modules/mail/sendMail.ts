import nodemailer from "nodemailer";

export async function sendMail(buffer) {
   // console.log("email", buffer);

  let transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "",
    to: "",
    subject: "Boleto",
    text: "Boleto",
    html: "Boleto",
    attachments: [
      {
        filename: "Boleto",
        content: buffer,
        contentType: "pdf",
      },
    ],
  });
  console.log("E-mail enviado com sucesso!");
}

  
