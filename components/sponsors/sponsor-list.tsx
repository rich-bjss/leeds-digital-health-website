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
        <div className="w-full flex flex-col items-center mt-16 m-2">
          <ul className="list-none flex flex-wrap justify-center gap-8">
            {sponsors.filter(s => s.youtubeLink ).map(buildSponsorYoutubeEmbed)}
          </ul>
          <ul className="list-none grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sponsors.map(buildSponsorElement)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function buildSponsorYoutubeEmbed(sponsor: Sponsor) {
  return (
    <li key={sponsor.sys.id} className="m-5">
      <iframe 
      width={560 * 0.8} 
      height={315 * 0.8} 
      src={sponsor.youtubeLink}
      title={sponsor.name}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
      </iframe>
    </li>
  )
}

function buildSponsorElement(sponsor: Sponsor) {
  return (
    <li key={sponsor.sys.id} className="w-64 h-full">
      <a href={sponsor.href ?? undefined}>
        <div className="p-4 h-full">
          {buildImageElement(sponsor)}
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