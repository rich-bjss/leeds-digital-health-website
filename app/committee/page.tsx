import { Suspense } from "react"
import SponsorList from "@/components/sponsors/sponsor-list"
import Footer from "@/components/layout/footer"

import LoadingMessage from "@/components/ui-elements/loading-message"

export default function SponsorPage() {
  return (
    <>
      <Suspense fallback={<LoadingMessage>Loading sponsors...</LoadingMessage>}>
        <SponsorList />
      </Suspense>
      <Footer showEventList={false} />
    </>
  )
}
