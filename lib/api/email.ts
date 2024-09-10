// Helper function to send emails
// TODO: Add a library and backend to this

interface Email {
    address: string
    content: string
}

export function sendEmail(input: Email) {
    let emailTo = process.env.CONTACT_US_EMAIL_ADDRESS;
    let emailFrom = input.address;
    let emailContent = input.content;
    // Do something with this idk
}