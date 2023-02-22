export default function handler(req, res) {  
    if(req.method === 'POST') {
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey("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"); //SendGridのAPIキー
       
      const msg = {
        to: req.body.email,
        from: 'support@example.com',
        subject: 'お問合せありがとうございました。',
        text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
        html: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      };
   
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
          if (error.response) {
            console.error(error.response.body)
          }
        }
      })();
    }
   
    res.status(200)
  }