import nodemailer from "nodemailer";

export async function sendMail(buffer) {
   // console.log("email", buffer);

  let transporter = nodemailer.createTransport({
    host: "smtp.rededompedro.com",
    port: 587,
    secure: false,
    auth: {
      user: "rodolfo.souza@rededompedro.com",
      pass: "Dompedro@2022",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "rodolfo.souza@rededompedro.com",
    to: "rodolfo.souza@rededompedro.com",
    subject: "Boleto",
    text: "Hello world",
    html: "Hello world",
    attachments: [
      {
        filename: "buffer",
        content: buffer,
        contentType: "pdf",
      },
    ],
  });
  console.log("Email enviado com sucesso!");
}

  
