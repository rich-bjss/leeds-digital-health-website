import Image from "next/image"

import { getAllSponsors } from "@/lib/api/sponsors"

export default async function SponsorList() {
    const sponsors = await getAllSponsors()
  
    return (
      <section id="committee" className="h-fit w-screen">
        <div className="top-5 min-h-fit w-screen mb-12">
          <h1 className="w-full text-center text-2xl sm:text-4xl font-bold text-gray-500">
            The Leeds Digital Health Committee
          </h1>
          <div className="w-full flex justify-center mt-16">
            <ul className="list-none w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {sponsors.map((sponsor) => (
                <li key={sponsor.sys.id} className="mx-auto">
                  <Image
                    src={sponsor.logo.url}
                    alt={sponsor.name}
                    sizes="100vw"
                    // fill
                    // style={{ objectFit: "contain", width: "50%", height: "auto" }}
                    width={200}
                    height={60}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* <Image
            src={ldhCommitteeImage}
            fill
            alt="LDH Committee Member Organisations"
            style={{ objectFit: "scale-down" }}
          /> */}
        </div>
      </section>
    )
  }