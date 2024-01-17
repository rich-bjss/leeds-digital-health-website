import HeroPost from "@/components/home/hero-post"
import HeadlineEvent from "@/components/home/headline-event"
import UpcomingEvents from "@/components/home/upcoming-events"

export default async function Page() {
  return (
    <div className="mx-auto">
      <HeroPost />
      <section id="upcoming">
        <HeadlineEvent />
        <UpcomingEvents />
      </section>
    </div>
  )
}
