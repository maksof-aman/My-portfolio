import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_H7aHhcza_5zfEti6KjHizH1379qjNHrSV');
const fromEmail = 'amanullahkhan91929@gmail.com';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: email,
      to: [fromEmail],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
