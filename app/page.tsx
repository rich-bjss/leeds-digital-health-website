import HeroPost from "@/components/home/hero-post"
import UpcomingEvents from "@/components/home/upcoming-events"

export default async function Page() {
  return (
    <div className="mx-auto">
      <HeroPost />
      <UpcomingEvents />
    </div>
  )
}
