import HeroPost from "@/components/home/hero-post"
import HeadlineContent from "@/components/home/headline/headline-content"
import UpcomingEvents from "@/components/home/upcoming/upcoming-events"

export default async function Page() {
  return (
    <div className="mx-auto">
      <HeroPost />
      <section id="upcoming">
        <HeadlineContent />
        <UpcomingEvents />
      </section>
    </div>
  )
}
