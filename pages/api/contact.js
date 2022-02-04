import { SMTPClient } from 'emailjs';



export default function handler(req, res) {
  const client = new SMTPClient({
    user: 'bizdamn@gmail.com',
    password: 'Bizdamn1435@#$%',
    host: 'smtp.gmail.com',
    ssl: true
  });

  try {


    client.send(
      {
        text:`Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message}`,
        from: 'bizdamn@gmail.com',
        to: 'makemycommerce@gmail.com',
        subject: 'Contact on MakeMyCommerce Website',

      }
    )
  }
  catch (e) {
    console.log(e)
    res.status(400).end(JSON.stringify({ message: e }))
    return;
  }

  res.status(200).end(JSON.stringify({ message: 'Send Mail' }))
}