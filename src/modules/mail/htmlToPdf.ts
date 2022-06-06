import { encrypt as encrypt } from "./encrypt";
import puppeteer from "puppeteer";
import path from "path/posix";

export async function htmlToPdf() {
  var links = [
    "http:www.google.com",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
    "http://www.lipsum.com/",
  ];

  for (const link of links) {
    console.log(link);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(link, {
      waitUntil: "networkidle2",
    });

    // let bufferTemp = await this.page.pdf({
    let buffer = await page.pdf({
      path: path.join(__dirname, "tmp/boleto.pdf"),
      format: "A4",
      margin: { left: "15px", top: "15px", right: "15px", bottom: "15px" },
      //fullPage: true,
    });

    let buffer2 = await encrypt().then(async (bufferEncrypted) => {
      return bufferEncrypted;
    });

    return buffer;

    await browser.close();
  }
}
