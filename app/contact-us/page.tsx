import EventList from "@/components/event-list";

function ContactUsForm() {
    return (
        <form className="flex flex-col">
            <div className="flex flex-col p-3 mx-auto w-full">
            <label className="text-white font-bold p-2" htmlFor="form-email">Email</label>
            <input className="rounded-md bg-grey-50 p-3" type="email" id="form-email" />
            </div>
            <div className="flex flex-col p-3 mx-auto w-full">
            <label className="text-white font-bold p-2" htmlFor="form-content">Content</label>
            <textarea className="rounded-md bg-grey-50 p-3" id="form-content" rows={4}></textarea>
            </div>
            <div className="bg-navy p-3 mx-auto">
                <input className="bg-pink rounded text-white p-4 cursor-pointer font-bold" type="submit" />
            </div>
        </form>
    )
}

export default function PreviousEventsPage() {
    return (
        <div className="w-full bg-navy">
        <div className="container mx-auto px-10">
            <ContactUsForm />
        </div>
        </div>
    )
}