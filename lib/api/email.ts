import nodemailer from "nodemailer";

export interface ContactUsMessage {
    address: string
    content: string
}

export function sendEmail(input: ContactUsMessage): Promise<any> {
    let transporterDetails = {
        service: process.env.EMAIL_TRANSPORT_SERVICE,
        host: process.env.EMAIL_TRANSPORT_HOST,
        port: process.env.EMAIL_TRANSPORT_PORT,
        secure: false,
        auth: {
                type: "LOGIN",
                user: process.env.EMAIL_SOURCE_ADDRESS || "",
                pass: process.env.EMAIL_TRANSPORT_PASS || "",
        }
    } as nodemailer.TransportOptions;

    let emailDetails = {
        from: process.env.EMAIL_SOURCE_ADDRESS,
        to: process.env.EMAIL_TARGET_ADDRESS,
        subject: `Leeds Digital Health: ${input.address}`,
        text: `This is a message from the Leeds Digital Health Contact Us from.\n\n${input.content}`
    }

    let transporter = nodemailer.createTransport(transporterDetails);
    return transporter.sendMail(emailDetails);
}