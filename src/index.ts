import 'dotenv/config';
 import { htmlToPdf } from './modules/mail/htmlToPdf';

  (async () => {
    await htmlToPdf()  
     .catch(console.log);
     console.log('Finalizado')
     process.exit(0)
 })(); 