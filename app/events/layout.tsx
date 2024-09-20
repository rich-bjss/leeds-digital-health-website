import Footer from "@/components/layout/footer";

export default function EventsLayout({children}:{children: React.ReactNode}){
    return <>
    {children}
    <Footer state="dynamic"/>
    </>
}