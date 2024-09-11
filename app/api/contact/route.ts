import { ContactUsMessage, sendEmail } from "@/lib/api/email"

export async function POST(req: Request) {
    let input: ContactUsMessage = await req.json();
    console.log(input);

    if (process.env.EMAIL_ACTUALLY_SEND_THEM == "true") {
        let e = sendEmail(input)
            .then(x => console.log("Email sent successfully!"))
            .catch(e => console.log(e));
    } else {
        console.log("Not actually sending an email");
        console.log("If you actually wanted to send emails, check your .env.local");
    }

    return Response.json(input);
}