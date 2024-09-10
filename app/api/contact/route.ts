import { ContactUsMessage, sendEmail } from "@/lib/api/email"

export async function POST(req: Request) {
    let input: ContactUsMessage = await req.json();
    console.log(input);
    let e = sendEmail(input)
    .then(x => console.log("Email sent successfully!"))
    .catch(e => console.log(e));
    return Response.json(input);
}