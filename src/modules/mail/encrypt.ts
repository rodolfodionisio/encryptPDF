import path from "path/posix";
import { sendMail as sendMail } from "./sendMail";
import { cnpj as cnpj } from "./cnpj";

export async function encrypt() {
  var fs = require("fs");
  var qpdf = require("node-qpdf");

  // let pass = await cnpj().then(async (results) => {
  //     console.log("Senha:", results.cnpj);
  //     return results.cnpj
  // });

  var options = {
    keyLength: 256,
    password: 654321,
    outputFile: path.join(__dirname, "tmp/boleto_encripty.pdf"),
    restrictions: {
      modify: "none",
      extract: "n",
    },
  };

  await qpdf.encrypt(path.join(__dirname, "tmp/boleto.pdf"), options);

  const buffer = fs.readFileSync(
    path.join(__dirname, "tmp/boleto_encripty.pdf")
  );

  //  fs.unlinkSync(path.join(__dirname, "tmp/boleto_encripty.pdf"));
  //  fs.unlinkSync(path.join(__dirname, "tmp/boleto.pdf"));

  //return buffer;
  await sendMail(buffer);
}
