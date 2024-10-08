"use client";
import { useRouter } from "next/navigation";
import {MouseEvent, useState} from "react"

function ContactUsForm() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    function handleForm(e: any) {
        e.preventDefault();
        if (email && content) { // should be enforced by the "required" fields
            fetch('/api/contact', {
                method: "POST",
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    email,
                    content
                })
            })
            .then(res => router.push("/contact-us-successful"))
            .catch(e => console.log(e))
        }
    }

    return (
        <form className="flex flex-col" >
            <div className="flex flex-col p-3 mx-auto w-full">
                <label className="text-white font-bold p-2" htmlFor="form-email">Email</label>
                <input className="rounded-md bg-grey-50 p-3"
                    placeholder="someone@example.com"
                    required={true}
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    id="form-email" />
            </div>
            <div className="flex flex-col p-3 mx-auto w-full">
                <label className="text-white font-bold p-2" htmlFor="form-content">Content</label>
                <textarea className="rounded-md bg-grey-50 p-3"
                    id="form-content"
                    required={true}
                    onChange={e => setContent(e.target.value)}
                    rows={4} />
            </div>
            <div className="bg-navy p-3 mx-auto">
                <input className="bg-pink rounded text-white p-2 cursor-pointer font-bold"
                    type="submit"
                    onClick={e => handleForm(e)}
                    value="Submit" />
            </div>
        </form>
    )
}

export default function ContactUsFormPage() {
    return (
        <div className="w-full bg-navy">
            <div className="container mx-auto px-10">
                <p className="text-white text-center p-4">Have a query? Please let us know using the form below, or <a className="bg-pink text-white font-bold p-2 rounded" href="https://www.linkedin.com/groups/12736111/">Contact us on LinkedIn</a></p>
                <ContactUsForm />
            </div>
        </div>
    )
}
