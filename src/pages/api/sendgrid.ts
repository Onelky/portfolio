import sendgrid from "@sendgrid/mail";
import {ContactForm} from "../../types";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

// @ts-ignore
async function sendEmail(req: {body: ContactForm}, res) {
    try {
        await sendgrid.send({
            to: process.env.TO_EMAIL,
            from: process.env.FROM_EMAIL ?? '',
            subject: `[From portfolio] ${req.body.subject}`,
            html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="Message from portfolio">
        <meta name="author" content="Onelky">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div style="display: flex;justify-content: center; align-items: center; border-radius: 5px; overflow: hidden;">
              </div>
              <div style="margin-left: 20px; margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is:️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
         </div>
      </body>
      </html>`,
        });
    } catch (error) {
        // @ts-ignore
        return res.status(error.statusCode || 500).json({
            success: false,
            // @ts-ignore
            error: error.message || 'Something went wrong. Please try again.'
        });
    }

    return res.status(200).json({ success: true });
}

export default sendEmail;