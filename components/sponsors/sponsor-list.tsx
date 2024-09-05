import Image from "next/image"

import { getAllSponsors } from "@/lib/api/sponsors"
import Sponsor from "@/lib/model/sponsor"

export default async function SponsorList() {
  const sponsors = await getAllSponsors()

  return (
    <section id="committee" className="h-fit w-screen">
      <div className="top-5 min-h-fit w-screen mb-12">
        <h1 className="w-full text-center text-2xl sm:text-4xl font-bold text-gray-500">
          The Leeds Digital Health Committee
        </h1>
        <div className="w-full flex justify-center mt-16 m-5">
          <ul className="list-none w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sponsors.map(buildSponsorElement)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function buildSponsorElement(sponsor: Sponsor) {
  return (
    <li key={sponsor.sys.id} className="w-64 h-full">
      <a href={sponsor.href ?? undefined}>
        <div className="rounded shadow-lg p-4  border border-gray-100 flex flex-col h-full">
          {buildImageElement(sponsor)}
          { sponsor?.description && <p className="p-2">{sponsor.description}</p> }
        </div>
      </a>
    </li>
  )
}

function buildImageElement(sponsor: Sponsor) {
  return (
    <Image
      className="mx-auto"
      src={sponsor.logo.url}
      alt={sponsor.name}
      sizes="100vw"
      width={200}
      height={60}
    />
  )
}