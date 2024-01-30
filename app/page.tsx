import HeroPost from "@/components/home/hero-post"
import HeadlineContent from "@/components/home/headline/headline-content"
import UpcomingEvents from "@/components/home/upcoming/upcoming-events"
import Footer from "@/components/layout/footer"

export default async function Page() {
  return (
    <div className="mx-auto">
      <HeadlineContent />
      <HeroPost />
      <UpcomingEvents />
      <Footer />
    </div>
  )
}
